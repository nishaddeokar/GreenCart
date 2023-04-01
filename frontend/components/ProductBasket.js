import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";

export default function ProductBasket() {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "row", width: "100%" }}>
      <View style={{ flexGrow: 1 }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: "https://images.barcodelookup.com/4385/43855888-1.jpg",
          }}
        />
      </View>
      <View style={{ flexGrow: 2 }}>
        <Text>Two very long text</Text>
      </View>
      <View style={{ flexGrow: 1 }}>
        <Text style={{ textAlign: "right" }}>Three</Text>
      </View>
    </SafeAreaView>
  );
}
