import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Navbar({ title }) {
  return (
    <View style={styles.navbarWrapper}>
      <Text style={styles.navbarTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarWrapper: {
    height: 80,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },

  navbarTitle: {
    color: "#fff",
    fontSize: 26,
  },
});
