import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const devHeight = Dimensions.get("window").height;
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
  topBar: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",

    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btmSheetContainer: {
    position: "absolute",
    bottom: 0,
    height: devHeight * 0.3,
    width: "100%",
    padding: 20,
  },
  btmSheet: {
    backgroundColor: "#282A34",
    width: "100%",
    height: "100%",
    borderRadius: 15,
    padding: 16,
  },
  textitem: {
    color: "#fff",
    fontSize: RFValue(14),
  },
  btmSheetitem: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  thumb: {
    backgroundColor: "#e74c3c",
    width: 20,
    height: 20,
    elevation: 4,
  },
  fontIndication: {
    marginLeft: 10,

    fontFamily: "Malayalam",
    color: "#ecf0f1",
  },
  icon: {
    margin: 3,
  },
  sliderHolder: {
    alignItems: "stretch",
    justifyContent: "center",
    width: "60%",
  },
});
