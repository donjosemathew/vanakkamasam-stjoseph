import React, { useEffect } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "@use-expo/font";

function Intro({ navigation }) {
  const [isLoaded] = useFonts({
    Malayalam: require("../assets/fonts/NotoSansMalayalam-Regular.ttf"),
    MalayalamBold: require("../assets/fonts/NotoSansMalayalam-Bold.ttf"),
    Oleana: require("../assets/fonts/Oleana.ttf"),
  });
  useEffect(() => {
    setTimeout(() => {
      navigation.push("Home");
    }, 4000);
  }, []);
  if (isLoaded) {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.push("Home")}>
          <Text>Hi</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Intro;
