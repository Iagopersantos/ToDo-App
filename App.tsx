import React from "react";
import { Home } from "./src/screens/Home";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </NativeBaseProvider>

  )
}