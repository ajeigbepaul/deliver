import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import RestaurantScreen from "../screen/RestaurantScreen";
import BasketScreen from "../screen/BasketScreen";
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Basket" component={BasketScreen} options={{
        presentation:"Modal",
        headerShown:false,
        
      }}/>
    </Stack.Navigator>
  );
};
export default AppNavigation;
