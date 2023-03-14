import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

import globalStyles from "../styles/globalStyles";
import homeStyles from "../styles/homeStyles";
function HomeScreen() {
  const [seleted, setSelected] = useState(5);
  const [day, setDay] = useState(Array.from(Array(31).keys()));

  const days = ["SUN", "MON", "TUE", "WED", "THU", "SAT", "FRI"];
  const getDay = (num) => {
    const d = new Date();
    const date = new Date(`${d.getFullYear()}-04-${num}`);
    let day = date.getDay(date);

    return day;
  };

  return (
    <View style={globalStyles.parent}>
      <StatusBar backgroundColor="transparent" />
      <Text style={homeStyles.head}>Vanakkamasam</Text>
      <Image style={globalStyles.bg} source={require("../assets/bg-2.png")} />
      <Image
        style={homeStyles.image}
        source={require("../assets/images/mathav.jpg")}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={homeStyles.scrollView}
        horizontal
      >
        {day.map((item) => {
          const dayofWeek = getDay(item + 1);
          return (
            <TouchableOpacity
              onPress={() => setSelected(item)}
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
          <Text
            style={{
              fontSize: 22,
              textAlign: "center",
              fontFamily: "MalayalamBold",
              color: "#282A34",
            }}
          >
            ഒന്നാം തീയതി
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              fontFamily: "Malayalam",
              color: "rgba(40, 42, 52, .5)",
            }}
          >
            പരിശുദ്ധ കന്യകയോടുള്ള ഭക്തിയുടെ ആവശ്യകത
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
}

export default HomeScreen;
