import React from "react";
import { StatusBar } from "react-native";
import { DarkModeProvider } from "./src/context/DarkMode";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <>
      <DarkModeProvider>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />
        <Home />
      </DarkModeProvider>
    </>
  );
}
