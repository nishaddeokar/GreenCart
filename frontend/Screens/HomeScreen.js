import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    name: 'Product 1',
    carbonFootprint: 5.0,
    imageURL:
      'https://images.unsplash.com/photo-1569738287709-043a6b8f6f8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZWFyY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    quantity: 3,
  },
  {
    id: '2',
    name: 'Product 2',
    carbonFootprint: 7.5,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg',
    quantity: 6,
  },
  {
    id: '3',
    name: 'Product 3',
    carbonFootprint: 3.2,
    imageURL:
      'https://cdn.pixabay.com/photo/2017/08/07/14/53/aircraft-2603167_960_720.jpg',
    quantity: 1,
  },
];

const Item = ({ name, carbonFootprint, imageURL, quantity, index }) => {
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
      <Text style={styles.itemName}>
        {totalCarbonFootprint}{' '}
        <Text style={styles.itemCarbonFootprint}>kgco2</Text>
      </Text>
    </View>
  );
};

export default function HomeScreen() {
  const navigation = useNavigation();
  const [items, setItems] = useState(data);

  const handleScanPress = () => {
    navigation.navigate('Scan');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Name</Text>
        <Text style={styles.headingText}>Total</Text>
      </View>
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <Item
            name={item.name}
            carbonFootprint={item.carbonFootprint}
            imageURL={item.imageURL}
            quantity={item.quantity}
            index={index}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Scan'); // navigate to "Scan" page
          }}
        >
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
      </View>
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
    bottom: '2.5%',
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
