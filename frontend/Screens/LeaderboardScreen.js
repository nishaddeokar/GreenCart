import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Leadb from "../components/Leadb";

export default function LeaderboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Leadb />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
