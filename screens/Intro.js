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
    // mobileAds()
    //   .initialize()
    //   .then((adapterStatuses) => {
    //     // Initialization complete!
    //     console.log(adapterStatuses);
    //   });
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
        >{`ഞാന്‍ ശാന്തശീലനും വിനീതഹൃദയനുമാകയാല്‍ എന്റെ നുകം വഹിക്കുകയും എന്നില്‍നിന്നു പഠിക്കുകയും ചെയ്യുവിന്‍.! (മത്തായി 11:29)`}</Text>
      </View>
    );
  }
}

export default Intro;
