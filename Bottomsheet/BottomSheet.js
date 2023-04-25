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
import { A } from "@expo/html-elements";
import homeStyles from "../styles/homeStyles";
import prayerStyles from "../styles/prayerStyles";
import { Slider } from "react-native-elements";
import { useEffect, useRef, useState } from "react";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import { color } from "react-native-reanimated";

function BottomSheetComponent({
  fontSize,
  SetFontSize,
  textAlign,
  SettextAlign,
}) {
  const [visible, setVisible] = useState(false);

  /////////////////////////////////////////
  //////////////////Animation
  const translation = useRef(new Animated.Value(400)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;
  const showBtn = () => {
    setVisible(true);
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
    Animated.spring(translation, {
      toValue: 400,
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
    }).start(() => {
      setVisible(false);
    });
  };

  return (
    <>
      {visible && (
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
              size={35}
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
                  minimumValue={13}
                  maximumValue={20}
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
            <Text style={{ color: "white", fontSize: RFValue(15) }}>
              Support Me
            </Text>
          </A>
        </Animated.View>
      )}
      {!visible && (
        <TouchableOpacity style={prayerStyles.FAB} onPress={showBtn}>
          <Icon
            name="options-outline"
            type="ionicon"
            color={"#272935"}
            size={35}
          />
        </TouchableOpacity>
      )}
    </>
  );
}

export default BottomSheetComponent;
