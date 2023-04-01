import { StyleSheet, View, Button, Text } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      {route.params && <Text>{route.params.name}</Text>}
      {route.params && <Text>{route.params.carbonFootprint}</Text>}
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
  },
});
