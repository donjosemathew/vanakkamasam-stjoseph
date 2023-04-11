import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const devWidth = Dimensions.get("window").width;
const devHeight = Dimensions.get("window").height;
export default homeStyles = StyleSheet.create({
  container: {},
  scrollView: {
    padding: 4,
    paddingRight: 35,

    flex: 0,
    flexGrow: 0,
    marginVertical: 10,
  },
  day: {
    height: 100,
    paddingHorizontal: 15,
    borderRadius: 400,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    width: devWidth * (1 / 5),
  },
  daySelected: {
    width: devWidth * (1 / 5),
    backgroundColor: "rgba(200, 197, 187, .4)",
    margin: 2,
    height: 100,
    paddingHorizontal: 15,
    borderRadius: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    fontSize: 20,
    fontWeight: 500,
    color: "rgba(39, 42, 52, .4)",
  },
  dayNum: {
    fontFamily: "Oleana",
    fontSize: 31,
    fontWeight: 500,
    color: "#272A34",
  },
  dayNumSun: {
    fontFamily: "Oleana",
    fontSize: 31,
    fontWeight: 500,
    color: "#E46168",
  },
  image: {
    height: devHeight * 0.3,
    resizeMode: "cover",
    borderRadius: 1000,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: devWidth * 0.6,
  },
  topContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  head: {
    fontFamily: "Oleana",
    fontWeight: 600,
    fontSize: 35,
  },
  holder2: {
    flexGrow: 1,
    width: devWidth,
    marginTop: 8,
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: "hidden",
  },
  innerBG: {
    flex: 1,
    justifyContent: "center",
    width: devWidth,
  },
  daySub: {
    fontSize: RFValue(16),
    textAlign: "center",
    fontFamily: "Malayalam",
    color: "rgba(40, 42, 52, .5)",
  },
  mlDate: {
    fontSize: RFValue(20),
    textAlign: "center",
    fontFamily: "MalayalamBold",
    color: "#282A34",
    width: "100%",
  },
  sukruthjapam: {
    fontSize: RFValue(16),
    marginHorizontal: 5,
    marginTop: 15,
    fontStyle: "italic",
    textAlign: "center",
    fontFamily: "Malayalam",
    color: "#282A34",
  },
  readBtn: {
    width: devWidth * 0.6,

    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    borderRadius: 1000,

    backgroundColor: "#282A34",
    marginTop: 14,
  },
  readBtnText: {
    fontSize: RFValue(22),
    letterSpacing: 2,
    fontFamily: "Oleana",
    color: "#fff",
    fontWeight: "400",
  },
});
