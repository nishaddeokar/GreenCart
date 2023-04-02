import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import EmptyScreen from '../Screens/EmptyScreen';
import LoginScreen from '../Screens/LoginScreen';
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Login' component={LoginScreen} />
      <Tab.Screen name='Notifications' component={EmptyScreen} />
    </Tab.Navigator>
  );
}
