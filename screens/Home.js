import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { datatext } from "../data/data";

import globalStyles from "../styles/globalStyles";
import homeStyles from "../styles/homeStyles";
function HomeScreen({ navigation }) {
  const [seleted, setSelected] = useState(0);

  const [day, setDay] = useState(Array.from(Array(31).keys()));

  const days = ["SUN", "MON", "TUE", "WED", "THU", "SAT", "FRI"];
  const getDay = (num) => {
    const d = new Date();
    const date = new Date(`${d.getFullYear()}-04-${num}`);
    let day = date.getDay(date);

    return day;
  };
  ///////////////////////
  ///////////Day
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const dayMonth = currentDate.getUTCDate();

  useEffect(() => {
    if (currentDate) {
      if (month == 4) {
        setSelected(dayMonth);
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
  return (
    <View style={globalStyles.parent}>
      <StatusBar backgroundColor="transparent" />
      <SharedElement id="vtext">
        <Text style={homeStyles.head}>Vanakkamasam</Text>
      </SharedElement>
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
              style={seleted == item ? homeStyles.daySelected : homeStyles.day}
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
  );
}

export default HomeScreen;
