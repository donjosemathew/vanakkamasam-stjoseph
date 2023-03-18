import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from "react-native";

import homeStyles from "../styles/homeStyles";
import prayerStyles from "../styles/prayerStyles";
import { Slider } from "react-native-elements";
import { useEffect, useRef, useState } from "react";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import { color } from "react-native-reanimated";

function BottomSheetComponent() {
  const [fontSize, SetFontSize] = useState(15);
  const [textAlign, SettextAlign] = useState("justify");

  const translation = useRef(new Animated.Value(100)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;
  useEffect(() => {}, []);
  const showBtn = () => {
    Animated.spring(translation, {
      toValue: 0,
      duration: 400,

      useNativeDriver: true,
    }).start();
    Animated.spring(opacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.spring(scale, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  const hidePopup = () => {
    console.log("df");
    Animated.spring(translation, {
      toValue: -100,
      duration: 400,

      useNativeDriver: true,
    }).start();
    Animated.spring(opacity, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.spring(scale, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={prayerStyles.btmSheetContainer}>
      <Animated.View
        style={[
          prayerStyles.btmSheet,
          {
            opacity: opacity,
            transform: [
              {
                translateY: translation,
              },
              {
                scale: scale,
              },
            ],
          },
        ]}
      >
        <TouchableOpacity
          style={{ position: "absolute", right: 5, top: 5, zIndex: 10 }}
        >
          <Icon
            onPress={hidePopup}
            name="close-circle-outline"
            type="ionicon"
            color={"#e74c3c"}
            size={27}
          />
        </TouchableOpacity>
        <Text style={prayerStyles.textitem}>Font Size</Text>
        <View style={prayerStyles.btmSheetitem}>
          <View style={prayerStyles.row}>
            <View style={prayerStyles.sliderHolder}>
              <Slider
                value={fontSize}
                onValueChange={(value) => {
                  SetFontSize(value);
                }}
                minimumValue={12}
                maximumValue={18}
                thumbStyle={prayerStyles.thumb}
                maximumTrackTintColor="#e0e0e0"
                minimumTrackTintColor="#e74c3c"
              />
            </View>
            <Text
              style={[
                prayerStyles.fontIndication,
                { fontSize: RFValue(fontSize) },
              ]}
            >
              അ
            </Text>
          </View>
        </View>
        <Text style={prayerStyles.textitem}>Text Alignment</Text>
        <View style={prayerStyles.row}>
          <TouchableOpacity style={[prayerStyles.icon]}>
            <Icon
              onPress={() => {
                SettextAlign("left");
              }}
              name="format-align-left"
              type="material-icons"
              color={textAlign == "left" ? "#ecf0f1" : "#bdc3c7"}
              size={35}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[prayerStyles.icon]}>
            <Icon
              onPress={() => {
                SettextAlign("center");
              }}
              name="format-align-center"
              type="material-icons"
              color={textAlign == "center" ? "#ecf0f1" : "#bdc3c7"}
              size={35}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[prayerStyles.icon]}>
            <Icon
              onPress={() => {
                SettextAlign("right");
              }}
              name="format-align-right"
              type="material-icons"
              color={textAlign == "right" ? "#ecf0f1" : "#bdc3c7"}
              size={35}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[prayerStyles.icon]}>
            <Icon
              onPress={() => {
                SettextAlign("justify");
              }}
              name="format-align-justify"
              type="material-icons"
              color={textAlign == "justify" ? "#ecf0f1" : "#bdc3c7"}
              size={35}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <TouchableOpacity onPress={showBtn}>
        <Text>Hi</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomSheetComponent;
