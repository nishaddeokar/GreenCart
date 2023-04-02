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
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: route.params.imageURL,
        }}
      />
      <Text style={styles.text}>Carbon Rating (Lower is better):</Text>
      <Text style={styles.text2}>
        {route.params.carbonFootprint.toFixed(2)}
      </Text>

      <View style={{ height: '10%' }} />
      <AppButton
        title='Add Product'
        onPress={() =>
          navigation.navigate('Home', {
            name: route.params.name,
            imageURL: route.params.imageURL,
            carbonFootprint: route.params.carbonFootprint,
          })
        }
      />
      <View style={{ height: '7%' }} />
      <AppButton title='Cancel' onPress={() => navigation.navigate('Scan')} />
      <View style={{ height: '10%' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
  text2: {
    fontSize: 40,
    marginVertical: 10,
  },
});

const AppButton = ({ title, onPress }) => {
  const [isDisabled, setDisabled] = useState(false);

  const handlePress = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 100);
    onPress();
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

const styles2 = StyleSheet.create({
  appButtonDisabled: {
    backgroundColor: '#000',
  },
});
