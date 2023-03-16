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
function PrayerScreen() {
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
      <Image style={globalStyles.bg} source={require("../assets/bg1.png")} />
      <Image
        style={homeStyles.image}
        source={require("../assets/images/mathav.jpg")}
      />
    </View>
  );
}

export default PrayerScreen;
