import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
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
});
