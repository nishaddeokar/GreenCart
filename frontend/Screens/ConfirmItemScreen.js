import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Product from '../components/Product';

export default function ConfirmItemScreen({ navigation, route }) {
  //   console.log(route.params);
  return (
    <View style={styles.container}>
      <Text style={styles3}>{route.params.name}</Text>
      <Image
        style={{ width: 250, height: 250, padding: 20 }}
        source={{
          uri: route.params.imageURL,
        }}
      />
      <Text style={styles3}>Carbon Rating 1-5 (Low-High):</Text>
      <Text style={styles3}>{route.params.carbonFootprint}</Text>

      <AppButton
        title='Add Product'
        onPress={() => navigation.navigate('Scan')}
      />

      <View style={{ height: 10 }} />

      <AppButton title='Cancel' onPress={() => navigation.navigate('Scan')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

const styles2 = StyleSheet.create({
  // ...
  appButtonDisabled: {
    backgroundColor: '#000',
  },
});

const styles3 = StyleSheet.create({
  // Bold text
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
});

const AppButton = ({ title }) => {
  const [isDisabled, setDisabled] = useState(false);

  const handlePress = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 100);
    () => navigation.navigate('HomePage');
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles2.appButtonContainer,
        isDisabled && styles2.appButtonDisabled,
      ]}
      disabled={isDisabled}
    >
      <Text style={[styles2.appButtonText, { fontSize: 40 }]}>{title}</Text>
    </TouchableOpacity>
  );
};
