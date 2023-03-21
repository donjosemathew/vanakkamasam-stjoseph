import { StyleSheet } from "react-native";
import { StatusBar, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const devHeight = Dimensions.get("window").height;
const devWidth = Dimensions.get("window").width;
export default styles = StyleSheet.create({
  container: {},
  parent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "red",
    paddingTop: StatusBar.currentHeight,
  },
  bg: {
    position: "absolute",
    top: 0,
    resizeMode: "cover",
    left: 0,
    zIndex: -1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 12,
    alignItems: "center",
  },
  introImage: {
    width: devWidth * 0.75,
    resizeMode: "cover",
    height: devHeight * 0.4,
    borderRadius: 20,
  },
  intro: {
    alignItems: "center",
    justifyContent: "center",
  },
  introtext: {
    fontSize: RFValue(35),
    marginTop: 20,
  },
  introSub: {
    fontFamily: "Malayalam",
    textAlign: "center",
    fontSize: RFValue(15),
    color: "rgba(40, 42, 52, .7)",
    marginTop: 9,
  },
});
