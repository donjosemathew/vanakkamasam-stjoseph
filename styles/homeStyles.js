import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

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
    width: Dimensions.get("window").width * (1 / 5),
  },
  daySelected: {
    width: Dimensions.get("window").width * (1 / 5),
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
    height: Dimensions.get("window").height * 0.3,
    resizeMode: "cover",
    borderRadius: 1000,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.6,
  },
  head: {
    fontFamily: "Oleana",
    fontWeight: 600,
    fontSize: 35,
    marginTop: 20,
  },
  holder2: {
    flexGrow: 1,
    width: Dimensions.get("window").width,
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
    width: Dimensions.get("window").width,
  },
});
