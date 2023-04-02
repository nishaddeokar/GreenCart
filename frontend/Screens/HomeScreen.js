import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Basket from '../components/Basket';

export default function HomeScreen() {
  const navigation = useNavigation();

  // Calculate the total carbon footprint
  const totalCarbonFootprint = items.reduce((acc, item) => {
    return acc + item.carbonFootprint * item.quantity;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Name</Text>
        <Text style={styles.headingText}>Total</Text>
      </View>
      <Basket />
      <TouchableOpacity style={styles.scanButton} onPress={handleScanPress}>
        <Text style={styles.scanButtonText}>Scan Product</Text>
      </TouchableOpacity>
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
    // position: 'absolute',
    bottom: '1.5%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 100,
    padding: '7%',
    minWidth: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
