import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BarcodeScreen from "./Screens/BarcodeScreen";
import HomeTabs from "./components/Navbar";
import ConfirmItemScreen from "./Screens/ConfirmItemScreen";
import { AppWrapper } from "./context/AppContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppWrapper>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="HomePage" component={HomeTabs} />
          <Stack.Screen
            name="Scan"
            component={BarcodeScreen}
            options={{ title: "Scan Item" }}
          />
          <Stack.Screen name="ConfirmItem" component={ConfirmItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </AppWrapper>
  );
}
