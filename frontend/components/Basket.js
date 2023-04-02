import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import Product from './Product';
import { useAppContext } from '../context/AppContext';

export default function Basket() {
  const { basket } = useAppContext();

  // Calculate the total carbon footprint
  const totalCarbonFootprint = basket.reduce((acc, item) => {
    return acc + item.carbonFootprint * item.quantity;
  }, 0);

  return (
    <>
      {basket && (
        <FlatList
          data={basket}
          renderItem={({ item, index }) => (
            <Product
              name={item.name}
              carbonFootprint={item.carbonFootprint}
              imageURL={item.imageURL}
              quantity={item.quantity}
              index={index}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
}
