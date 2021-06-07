import React, { useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView, Switch } from "react-native";
import { DarkModeContext } from "../context/DarkMode";

export function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <SafeAreaView
      style={[styles.container, isDarkMode && styles.containerDark]}
    >
      <View style={[styles.header, isDarkMode && styles.headerDark]}>
        <Text style={[styles.headerText, isDarkMode && styles.headerTextDark]}>
          to.
        </Text>
        <Text
          style={[
            styles.headerText,
            { fontFamily: "Poppins-SemiBold" },
            isDarkMode && styles.headerTextDark,
          ]}
        >
          do
        </Text>
        <View style={styles.darkModeView}>
          <Text style={styles.darkModeText}>
            {isDarkMode ? "Dark " : "Light "}
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            thumbColor={isDarkMode ? "#E1E1E6" : "#FFF"}
            trackColor={{ true: "#273FAD", false: "#282B5A" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#273FAD",
  },
  containerDark: {
    backgroundColor: "#282B5A",
  },
  header: {
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerDark: {
    backgroundColor: "#282B5A",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  headerTextDark: {
    color: "#E1E1E6",
  },
  darkModeView: {
    position: "absolute",
    right: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  darkModeText: {
    color: "#FFF",
  },
});
