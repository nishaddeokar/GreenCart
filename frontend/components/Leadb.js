import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Leader from "./Leader";
import { db } from "../authentication/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function compare(a, b) {
  if (a.Score < b.Score) return -1;
  if (a.Score > b.Score) return 1;
  return 0;
}
const Leadb = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let unsortedUsers = [];
    try {
      const querySnapshot = await getDocs(collection(db, "UserData"));
      // console.log(Object.fromEntries(querySnapshot.map((doc) => doc.data())))
      querySnapshot.forEach((doc) => {
        unsortedUsers.push(doc.data());
      });
      unsortedUsers.sort(compare);
      setUsers(unsortedUsers);
    } catch (error) {}
  }

  useEffect(() => {
    getUsers();
    setUsers([]);
  }, []);

  let x = 0;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      {users &&
        users.map((entry) => (
          <Leader
            key={
              entry.UserID._key.path.segments[
                entry.UserID._key.path.segments.length - 1
              ]
            }
            rank={++x}
            username={entry.Name}
            score={entry.Score}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Leadb;
