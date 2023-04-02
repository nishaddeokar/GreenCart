import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Leader({ rank, username, score }) {
  return (
    <View style={styles.container}>
      <View style={styles}>
        <Text style={styles.text}>{rank}</Text>
      </View>
      <View style={styles}>
        <Text style={styles.text}>{username}</Text>
      </View>
      <View style={styles}>
        <Text style={styles.text}>{score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontWeight: "normal",
  },
});
