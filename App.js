import "react-native-url-polyfill/auto";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./app/navigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </NavigationContainer>
  );
}
