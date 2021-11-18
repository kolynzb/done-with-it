import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

export default function App() {
  console.log(StatusBar.currentHeight);
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
