import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import getDitchCarbonData from './utilities/ditchCarbon';
import getBarcodeData from './utilities/barcodeConverter';
import HomeScreen from './Screens/HomeScreen';
import BarcodeScreen from './Screens/BarcodeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name='Scan'
            component={BarcodeScreen}
            options={{ title: 'Scan Item' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}
