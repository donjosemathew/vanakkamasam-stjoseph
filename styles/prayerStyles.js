import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default prayerStyles = StyleSheet.create({
  dateNum: {
    marginTop: 10,
    fontSize: RFValue(20),
  },
  subtext: {
    marginTop: 6,
    fontSize: RFValue(17),
  },
  text: {
    marginTop: 13,
    fontSize: RFValue(16),
    color: "rgba(39, 42, 52, 1)",
    lineHeight: 30,
    textAlign: "justify",
  },
  subHead: {
    fontSize: RFValue(18),
    color: "rgba(227, 97, 102, 1)",
    fontFamily: "MalayalamBold",
    marginTop: 10,
    textAlign: "center",
  },
  luthiniya: {
    textAlign: "left",
  },
});
