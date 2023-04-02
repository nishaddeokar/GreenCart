import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import getBarcodeData from '../utilities/barcodeConverter';
import getDitchCarbonData from '../utilities/ditchCarbon';

export default function BarcodeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  async function getBarCodeScannerPermissions() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);

  async function handleBarCodeScanned({ data: barcodeNum }) {
    const barcodeData = await getBarcodeData(barcodeNum, false);
    const ditchCarbonData = await getDitchCarbonData(
      barcodeData.products[0],
      false
    );

    navigation.navigate('ConfirmItem', {
      name: barcodeData.products[0].title,
      imageURL: barcodeData.products[0].images[0],
      carbonFootprint: ditchCarbonData.carbon_footprint,
    });
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <BarCodeScanner
      onBarCodeScanned={handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
  );
}
