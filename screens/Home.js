import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import { Icon } from "react-native-elements";
import {
  TouchableOpacity,
  ImageBackground,
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
import { datatext } from "../data/sacredHeart";
import * as MailComposer from "expo-mail-composer";
import globalStyles from "../styles/globalStyles";
import homeStyles from "../styles/homeStyles";
import { RFValue } from "react-native-responsive-fontsize";

function HomeScreen({ navigation }) {
  const [seleted, setSelected] = useState(0);
  const devWidth = Dimensions.get("window").width;
  const [day, setDay] = useState(Array.from(Array(30).keys()));

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const getDay = (num) => {
    const d = new Date();
    const date = new Date(`${d.getFullYear()}-06-${num}`);
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
      if (month == 6) {
        setSelected(dayMonth);
        console.log(dayMonth);
      } else {
        setSelected(0);
      }
    }
  }, []);
  /////////////////
  ////
  const prayerPage = () => {
    navigation.push("prayer", {
      day: seleted,
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
          4.0.0
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
        <Image style={globalStyles.bg} source={require("../assets/bg-2.png")} />
        <SharedElement id="mathav">
          <Image
            style={homeStyles.image}
            source={require("../assets/images/mathav.jpg")}
          />
        </SharedElement>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={homeStyles.scrollView}
          horizontal
        >
          {day.map((item, i) => {
            const dayofWeek = getDay(item + 1);
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelected(item);
                }}
                key={item}
                style={
                  seleted == item ? homeStyles.daySelected : homeStyles.day
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
          <ImageBackground
            source={require("../assets/bg1.png")}
            resizeMode="cover"
            style={homeStyles.innerBG}
          >
            <Text style={homeStyles.mlDate}>{datatext[seleted].daytext}</Text>

            <Text style={homeStyles.daySub}>{datatext[seleted].subject}</Text>

            <Text style={homeStyles.sukruthjapam}>
              {datatext[seleted].sukruthajapam}
            </Text>
            <TouchableOpacity onPress={prayerPage} style={homeStyles.readBtn}>
              <Text style={homeStyles.readBtnText}>Read Prayer </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}

export default HomeScreen;
