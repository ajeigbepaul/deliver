import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  let naira = Intl.NumberFormat("en-NG");

  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 z-30 w-full px-4">
      <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
        <View className="w-full bg-orange-300 flex-row p-4 items-center justify-between rounded-lg">
          <View className="w-8 h-8 rounded-tl-md flex-row items-center justify-center bg-orange-500">
            <Text className="text-white font-bold">{items.length}</Text>
          </View>
          <Text className="text-white font-bold text-sm">View Basket</Text>

          <Text className="text-white text-sm">₦ {naira.format(total)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
