import { StyleSheet, View, Button } from 'react-native';
import Product from '../components/Product';

export default function HomeScreen({ navigation, route }) {
  console.log(route.params);
  return (
    <View style={styles.container}>
      {route.params && (
        <Product
          name={route.params.name}
          imageURL={route.params.imageURL}
          carbonFootprint={route.params.carbonFootprint}
        />
      )}
      <Button
        title='Scan Product'
        onPress={() => navigation.navigate('Scan')}
      />
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
});
