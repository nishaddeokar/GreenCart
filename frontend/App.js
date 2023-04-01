import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getDitchCarbonData from './utilities/ditchcarbon';

export default function App() {
  const [ditchCarbonData, setDitchCarbonData] = useState({});

  useEffect(() => {
    getDitchCarbonData(setDitchCarbonData);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(ditchCarbonData)}</Text>
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
