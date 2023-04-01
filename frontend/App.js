import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getDitchCarbonData from './utilities/ditchCarbon';
import getBarcodeData from './utilities/barcodeConverter';

export default function App() {
  const [ditchCarbonData, setDitchCarbonData] = useState({});
  const [barcodeData, setBarcodeData] = useState({});

  useEffect(() => {
    getDitchCarbonData(setDitchCarbonData, false);
    getBarcodeData(setBarcodeData, false);
    console.log(ditchCarbonData);
    console.log(barcodeData);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
