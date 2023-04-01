import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";

export default function Product({ name, imageURL, carbonFootprint }) {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "row", width: "100%" }}>
      <View style={{ flexGrow: 1 }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: imageURL,
          }}
        />
      </View>
      <View style={{ flexGrow: 2 }}>
        <Text>{name}</Text>
      </View>
      <View style={{ flexGrow: 1 }}>
        <Text style={{ textAlign: "right" }}>{carbonFootprint}</Text>
      </View>
    </SafeAreaView>
  );
}
