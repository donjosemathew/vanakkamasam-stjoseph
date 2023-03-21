// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import {
  SharedElement,
  createSharedElementStackNavigator,
} from "react-navigation-shared-element";
import Intro from "./screens/Intro";
import PrayerScreen from "./screens/Prayer";
const Stack = createSharedElementStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen
          name="Home"
          sharedElements={() => {
            return ["mathav", "vtext"];
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="prayer"
          sharedElements={() => {
            return ["mathav", "text1", "text2"];
          }}
          component={PrayerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
