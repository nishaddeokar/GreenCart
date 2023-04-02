import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Leader({ rank, username, score }) {
  const isEven = rank % 2 === 0;
  const backgroundColor = isEven ? "#f2f2f2" : "white";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.box}>
        <Text style={styles.text}>{rank}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>{username}</Text>
      </View>
      <View style={styles.box}>
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
    backgroundColor: "#fff",
  },
  box: {
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontWeight: "normal",
  },
});
