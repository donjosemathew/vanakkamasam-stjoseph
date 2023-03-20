import React, { useEffect } from "react";
import { Button, Image, View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "@use-expo/font";
import globalStyles from "../styles/globalStyles";
import { StatusBar } from "expo-status-bar";
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
      <View style={globalStyles.parent}>
        <StatusBar backgroundColor="transparent" />
        <Image
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          source={require("../assets/images/3.png")}
        />
        <TouchableOpacity onPress={() => navigation.push("Home")}>
          <Text>Hi</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Intro;
