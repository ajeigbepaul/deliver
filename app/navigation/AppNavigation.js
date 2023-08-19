import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import RestaurantScreen from "../screen/RestaurantScreen";
import BasketScreen from "../screen/BasketScreen";
import PreparingOrderScreen from "../screen/PreparingOrderScreen";
import DeliveryScreen from "../screen/DeliveryScreen";
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          presentation: "Modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Preparingorder"
        component={PreparingOrderScreen}
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AppNavigation;
