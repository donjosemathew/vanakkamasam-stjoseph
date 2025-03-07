import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import { Icon } from "react-native-elements";
import {
  TouchableOpacity,
  Text,
  View,
  DrawerLayoutAndroid,
  Image,
  ScrollView,
  Dimensions,
  ToastAndroid,
  BackHandler,
} from "react-native";
import { A } from "@expo/html-elements";
import { SharedElement } from "react-navigation-shared-element";
import { datatext } from "../data/stjospehdata";
import * as MailComposer from "expo-mail-composer";
import globalStyles from "../styles/globalStyles";
import homeStyles from "../styles/homeStyles";
import { RFValue } from "react-native-responsive-fontsize";
import { getImageForToday } from "../data/imageGenerator";

function HomeScreen({ navigation }) {
  const img = getImageForToday();
  console.log(navigation.params, "params");
  const [seleted, setSelected] = useState(0);
  const devWidth = Dimensions.get("window").width;
  const [day, setDay] = useState(Array.from(Array(31).keys()));

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const getDay = (num) => {
    const d = new Date();
    const date = new Date(`${d.getFullYear()}-03-${num}`);
    let day = date.getDay(date, date);
    return day;
  };
  const drawer = useRef(null);
  ///////////////////////
  ///////////Day
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const dayMonth = currentDate.getUTCDate();

  useEffect(() => {
    if (currentDate) {
      if (month == 3) {
        setSelected(dayMonth);
        console.log(dayMonth, month);
      } else {
        setSelected(1);
      }
    }
  }, []);
  /////////////////
  ////
  const prayerPage = () => {
    console.log(seleted);
    navigation.push("prayer", {
      day: seleted <= 0 ? 1 : seleted,
    });
  };
  /////
  /////Back Btn
  let toastVisible = false;
  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        if (toastVisible) {
          BackHandler.exitApp();
        } else {
          e.preventDefault();
          ToastAndroid.show("Press again to exit!", ToastAndroid.SHORT);
          toastVisible = true;
          setTimeout(() => (toastVisible = false), 5000);
        }
      }),
    [navigation]
  );

  //////////////////
  ////ad

  // useEffect(() => {
  //   load();
  // }, [load]);
  const drawerLayout = () => {
    return (
      <View
        style={{
          padding: 13,
          marginTop: 20,
          flexDirection: "column",
          justifyContent: "space-between",

          flex: 1,
        }}
      >
        <View>
          <A
            style={{
              padding: 10,
              width: "100%",
              borderRadius: 5,
              marginBottom: 10,
              marginTop: 10,
              backgroundColor: "rgba(200, 197, 187, .2)",
            }}
            href="https://www.buymeacoffee.com/donjosemathew"
          >
            <Text style={{ color: "#282A34", fontSize: RFValue(15) }}>
              Support Me
            </Text>
          </A>
          <TouchableOpacity
            onPress={() =>
              MailComposer.composeAsync({
                subject: "Sacred Heart Vanakkamasam | Developer Contact",
                recipients: ["donjosemathew.mail@gmail.com"],
              })
            }
            style={{
              padding: 10,
              width: "100%",
              borderRadius: 5,
              backgroundColor: "rgba(200, 197, 187, .2)",
            }}
          >
            <Text style={{ color: "#282A34", fontSize: RFValue(15) }}>
              Contact Me
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              MailComposer.composeAsync({
                subject: "Sacred Heart Vanakkamasam | Error",
                recipients: ["donjosemathew.mail@gmail.com"],
              })
            }
            style={{
              padding: 10,
              width: "100%",
              borderRadius: 5,
              backgroundColor: "rgba(200, 197, 187, .2)",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#282A34", fontSize: RFValue(15) }}>
              Report Error
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: RFValue(14),
            marginBottom: 5,
            color: "#757575",
          }}
        >
          Version{"\n"}
          3.0.0
        </Text>
      </View>
    );
  };
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={devWidth * 0.7}
      drawerPosition={"left"}
      renderNavigationView={drawerLayout}
    >
      <Image
        style={globalStyles.bg}
        source={require("../assets/images/bg.jpeg")}
      />
      <View style={globalStyles.parent}>
        <StatusBar backgroundColor="transparent" />
        <View style={homeStyles.topContainer}>
          <Icon
            onPress={() => {
              drawer.current.openDrawer();
            }}
            name="reorder-two-outline"
            type="ionicon"
            color={"#282A34"}
            size={40}
          />
          <SharedElement id="vtext">
            <Text style={homeStyles.head}>Vanakkamasam</Text>
          </SharedElement>
          <Icon
            style={{}}
            name="close-circle-outline"
            type="ionicon"
            color={"transparent"}
            size={40}
          />
        </View>

        <SharedElement id="mathav">
          <Image style={homeStyles.image} source={img} />
        </SharedElement>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={homeStyles.scrollView}
          horizontal
        >
          {day.map((item, i) => {
            const dayofWeek = getDay(item);
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelected(i + 1);
                }}
                key={item}
                style={
                  seleted == item + 1 ? homeStyles.daySelected : homeStyles.day
                }
              >
                <Text style={homeStyles.dayText}>{days[dayofWeek]}</Text>
                <Text
                  style={
                    dayofWeek == 0 ? homeStyles.dayNumSun : homeStyles.dayNum
                  }
                >
                  {item + 1 < 10 ? "0" + `${item + 1}` : item + 1}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={homeStyles.holder2}>
          <Text style={homeStyles.mlDate}>
            {seleted >= 1 && seleted <= 30
              ? datatext[seleted - 1].daytext
              : datatext[seleted].daytext}
          </Text>

          <Text style={homeStyles.daySub}>
            {seleted >= 1 && seleted <= 30
              ? datatext[seleted - 1].subject
              : datatext[seleted].subject}
          </Text>

          <Text style={homeStyles.sukruthjapam}>
            {seleted >= 1 && seleted <= 30
              ? datatext[seleted - 1].sukruthajapam
              : datatext[seleted].sukruthajapam}
          </Text>
          <TouchableOpacity onPress={prayerPage} style={homeStyles.readBtn}>
            <Text style={homeStyles.readBtnText}>Read Prayer </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}

export default HomeScreen;
