import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {StarIcon, MapPinIcon} from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";
import { useNavigation } from "@react-navigation/native";
const RestaurantCard = ({
  id,
  imageurl,
  title,
  rating,
  genre,
  address,
  descr,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      className="mr-2 bg-white shadow-2xl"
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imageurl,
          title,
          rating,
          genre,
          address,
          descr,
          dishes,
          long,
          lat,
        })
      }
    >
      <Image
        source={{ uri: urlFor(imageurl).url() }}
        className="w-64 h-32 rounded-md"
      />
      <View className="px-0">
        <Text className="mt-2 font-bold pl-2">{title}</Text>
        <View className="flex-row items-center space-x-1 mt-2 pl-2">
          <StarIcon color="orange" size={14} />
          <Text className="text-gray-500">
            <Text className="text-orange-300 font-semibold">{rating}</Text> -{" "}
            {genre}
          </Text>
        </View>
        <View className="flex-row items-center pl-1">
          <MapPinIcon color="gray" />
          <Text className="text-sm text-gray-400">NearBy - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
