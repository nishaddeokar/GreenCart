import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { useAppContext } from '../context/AppContext';

export default function ConfirmItemScreen({ navigation, route }) {
  const { setBasket } = useAppContext();
  const [quantity, setQuantity] = useState(1);

  function handleProductAdd() {
    const barcodeNum = route.params.barcodeNum;
    const name = route.params.name;
    const imageURL = route.params.imageURL;
    carbonFootprint = route.params.carbonFootprint;

    setBasket((currState) => [
      ...currState,
      { id: barcodeNum, name, carbonFootprint, imageURL, quantity },
    ]);
    navigation.navigate('Home', {
      name,
      imageURL,
      carbonFootprint,
      quantity,
    });
  }

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
        {route.params.carbonFootprint.toFixed(2)} kgco2
      </Text>
      <View style={styles.quantityContainer}>
        <Text style={styles.text}>Carbon Rating: </Text>
        <CarbonDisplay carbonFootprint={route.params.carbonFootprint} />
      </View>
      <View style={{ height: '5%' }} />
      <View style={styles.quantityContainer}>
        <Text style={styles.text}>Quantity:</Text>
        <View style={styles.quantityContainer}>
          <NumericInput
            value={quantity}
            onChange={setQuantity}
            minValue={1}
            totalWidth={80}
            totalHeight={50}
            iconSize={25}
            step={1}
            valueType='real'
            rounded
            textColor='#B0228C'
            iconStyle={{ color: 'white' }}
            rightButtonBackgroundColor='#EA3788'
            leftButtonBackgroundColor='#E56B70'
          />
        </View>
      </View>
      <View style={{ height: '5%' }} />
      <AppButton title='Add Product' onPress={handleProductAdd} />
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  quantityInput: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    width: 40,
    textAlign: 'center',
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

function CarbonDisplay({ carbonFootprint }) {
  const color = getColorFromCarbonValue(carbonFootprint);
  return (
    <View style={styles5.container}>
      <View style={[styles5.square, { backgroundColor: color }]} />
    </View>
  );
}

function getColorFromCarbonValue(carbonFootprint) {
  const minCarbon = 0; // adjust this to your desired minimum carbon value
  const maxCarbon = 50; // adjust this to your desired maximum carbon value
  const range = maxCarbon - minCarbon;
  const normalizedValue = Math.min(
    Math.max(carbonFootprint - minCarbon, 0) / range,
    1
  );
  const hue = ((1 - normalizedValue) * 120).toString(10);
  return `hsl(${hue}, 100%, 50%)`;
}

const styles5 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
  },
});
