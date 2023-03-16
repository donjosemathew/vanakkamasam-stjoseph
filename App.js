// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";

import Intro from "./screens/Intro";
import PrayerScreen from "./screens/Prayer";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="prayer" component={PrayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
