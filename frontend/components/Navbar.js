import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import EmptyScreen from '../Screens/EmptyScreen';
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Feed' component={EmptyScreen} />
      <Tab.Screen name='Notifications' component={EmptyScreen} />
    </Tab.Navigator>
  );
}
