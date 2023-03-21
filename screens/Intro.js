import React, { useEffect } from "react";
import { Button, Image, View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "@use-expo/font";
import globalStyles from "../styles/globalStyles";
import { StatusBar } from "expo-status-bar";
import homeStyles from "../styles/homeStyles";
import { SharedElement } from "react-navigation-shared-element";
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
      <View style={[globalStyles.parent, globalStyles.intro]}>
        <StatusBar backgroundColor="transparent" />
        <Image style={globalStyles.bg} source={require("../assets/bg-2.png")} />
        <SharedElement id="mathav">
          <Image
            style={globalStyles.introImage}
            source={require("../assets/images/mathav.jpg")}
          />
        </SharedElement>
        <SharedElement id="vtext">
          <Text style={[homeStyles.head, globalStyles.introtext]}>
            Vanakkamasam
          </Text>
        </SharedElement>
        <Text
          style={globalStyles.introSub}
        >{`ഇതാ, കര്‍ത്താവിന്റെ ദാസി! നിന്റെ വാക്ക് എന്നില്‍ നിറവേറട്ടെ! (ലൂക്കാ 1:38)`}</Text>
        <TouchableOpacity onPress={() => navigation.push("Home")}>
          <Text>Hi</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Intro;
