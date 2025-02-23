import { useEffect } from "react";
import { Image, View, Text } from "react-native";
import { useFonts } from "@use-expo/font";
import globalStyles from "../styles/globalStyles";
import { StatusBar } from "expo-status-bar";
import homeStyles from "../styles/homeStyles";
import { SharedElement } from "react-navigation-shared-element";
import { getImageForToday } from "../data/imageGenerator";

function Intro({ navigation }) {
  const [isLoaded] = useFonts({
    Malayalam: require("../assets/fonts/NotoSansMalayalam-Regular.ttf"),
    MalayalamBold: require("../assets/fonts/NotoSansMalayalam-Bold.ttf"),
    Oleana: require("../assets/fonts/Oleana.ttf"),
  });

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getDayBasedInt = (day) => {
    return (day % 6) + 1;
  };

  const img = getImageForToday();
  useEffect(() => {
    setTimeout(() => {
      navigation.push("Home");
    }, 4000);
  }, []);
  if (isLoaded) {
    return (
      <View style={[globalStyles.parent, globalStyles.intro]}>
        <StatusBar backgroundColor="transparent" />
        <Image
          style={globalStyles.bg}
          source={require("../assets/images/bg2.jpeg")}
        />
        <SharedElement id="mathav">
          <Image style={globalStyles.introImage} source={img} />
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
