import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import { selectRestaurantItems } from "../../features/restaurantSlice";
import { urlFor } from "../../sanity";
const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurantItems);
  const total = useSelector(selectBasketTotal)
  const [groupiteminbasket, setGroupItemInBasket] = useState([]);
  let naira = Intl.NumberFormat("en-NGN");
  useMemo(() => {
    const groupitems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupItemInBasket(groupitems);
  }, [items]);
  return (
    <SafeAreaView className="pt-10 bg-white flex-1 ">
      <View className="bg-gray-100 flex-1">
        <View className="p-3 border-b border-orange-100 bg-white shadow-sm">
          <View className="items-center justify-center">
            <Text className="font-bold">Basket</Text>
            <Text className="text-gray-300">Nandos</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="w-12 h-12 absolute top-1 right-4 bg-orange-100 rounded-full flex items-center justify-center"
          >
            <XCircleIcon size={32} color="orange" />
          </TouchableOpacity>
        </View>
        {/* next layere */}
        <View className="flex-row items-center px-4 py-3 my-3 bg-white space-x-3">
          <Image
            source={require("../../assets/deleveryrider.jpeg")}
            className="w-10 h-10 rounded-full object-cover bg-gray-200"
          />
          <Text className="flex-1 text-gray-500">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-orange-300 font-bold text-sm">Change</Text>
          </TouchableOpacity>
        </View>
        {/* pull the grouped items */}
        <ScrollView className="divide-y divide-gray-100">
          {Object.entries(groupiteminbasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center bg-white space-x-3 px-4 py-3"
            >
              <Text className="font-semibold text-orange-400">
                {items.length} x
              </Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-500">
                ₦ {naira.format(items[0].price)}
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-orange-300 text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Sub-Total</Text>
            <Text className="text-gray-400">₦ {naira.format(total)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Delivery Fee</Text>
            <Text className="text-gray-400">₦ {naira.format(500)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Order Total</Text>
            <Text className="font-extrabold">₦ {naira.format(total + 500)}</Text>
          </View>
          <TouchableOpacity className="bg-orange-400 items-center py-3 rounded-lg" onPress={()=>navigation.navigate("Preparingorder")}>
            <Text className="text-white text-lg font-bold">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
