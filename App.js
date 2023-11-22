// In App.js in a new project

import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigation from "./navigation/appNavigation";

const Stack = createNativeStackNavigator();

function App() {
  return <AppNavigation />;
}

export default App;
