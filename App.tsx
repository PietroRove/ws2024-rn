import React from "react";
import HomeScreen from "./src/views/HomeScreen";
import { OneSignal } from "react-native-onesignal";
import { ONE_SIGNAL_APP_ID } from "./src/config/constants";

export default function App() {
  OneSignal.initialize(ONE_SIGNAL_APP_ID);
  OneSignal.Notifications.requestPermission(true);
  
  return <HomeScreen />;
}
