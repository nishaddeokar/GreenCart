import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import getBarcodeData from '../utilities/barcodeConverter';
import getDitchCarbonData from '../utilities/ditchCarbon';
import { useAppContext } from '../context/AppContext';

export default function BarcodeScreen({ navigation }) {
  const { basket, setBasket } = useAppContext();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  async function getBarCodeScannerPermissions() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);

  async function handleBarCodeScanned({ data: barcodeNum }) {
    if (basket.some((product) => product.id == barcodeNum)) {
      return;
    }

    setScanned(true);

    const barcodeData = await getBarcodeData(barcodeNum, true);
    const ditchCarbonData = await getDitchCarbonData(
      barcodeData.products[0],
      true
    );

    const name = barcodeData.products[0].title;
    const imageURL = barcodeData.products[0].images[0];
    const carbonFootprint = ditchCarbonData.carbon_footprint;

    navigation.navigate('ConfirmItem', {
      barcodeNum,
      name,
      imageURL,
      carbonFootprint,
      setScanned,
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
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
  );
}
