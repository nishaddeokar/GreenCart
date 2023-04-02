import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function Product({
  name,
  carbonFootprint,
  imageURL,
  quantity,
  index,
}) {
  const backgroundColor = index % 2 === 0 ? '#f2f2f2' : '#ffffff';
  const totalCarbonFootprint = (carbonFootprint * quantity).toFixed(2);
  return (
    <View style={[styles.itemContainer, { backgroundColor }]}>
      <Image source={{ uri: imageURL }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemCarbonFootprint}>
          Carbon Footprint: {carbonFootprint.toFixed(2)}
        </Text>
        <Text style={styles.itemCarbonFootprint}>Quantity: {quantity}</Text>
      </View>
      <Text style={styles.itemName}>{totalCarbonFootprint}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
  },
  itemCarbonFootprint: {
    fontSize: 14,
    color: '#777',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
