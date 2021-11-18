import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgrndImage}
        source={require("./app/assets/background.jpg")}
        width="100%"
        height="100%"
        resizeMode="contain"
      />
      <View>
        <View style={styles.LogoContainer}>
          <Image
            style={styles.Logo}
            source={require("./app/assets/logo-red.png")}
          />
        </View>
        <Text>Some text goes here</Text>
      </View>
      <View>
        <Button
          title="btn"
          color="green"
          onPress={console.log("btn 1 press")}
        />
        <Button title="btn" color="blue" onPress={console.log("btn 2 press")} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  backgrndImage: {
    position: "absolute",
    zIndex: -1,
  },
  Logo: {
    width: "20",
    height: "20",
    resizeMode: "cover",
  },
});
