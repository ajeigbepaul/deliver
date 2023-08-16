import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import {
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import {
  StarIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imageurl).url() }}
          className="w-full h-56 bg-slate-400 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="w-12 h-12 absolute top-12 left-2 bg-blue-100 rounded-full flex items-center justify-center"
        >
          <ArrowLeftIcon size={32} color="orange" className="" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-2xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center">
              <StarIcon color="orange" size={14} />
              <Text className="text-gray-500">
                <Text className="text-orange-300 font-semibold">{rating}</Text>{" "}
                - {genre}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MapPinIcon color="gray" />
              <Text className="text-sm text-gray-400">NearBy - {address}</Text>
            </View>
          </View>
          <Text className="text-gray-400">{descr}</Text>
        </View>
        <TouchableOpacity className="p-4 flex-row items-center">
          <QuestionMarkCircleIcon size={20} opacity={0.6} color="grey" />
          <Text className="text-md flex-1 font-bold pl-2">
            Have a food allegy?
          </Text>
          <ChevronRightIcon color="dodgerblue" />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="p-4 pt-6 font-bold text-xl mb-3">Menu</Text>
        {dishes.map((dish) => (
          <DishRow key={dish._id}
           id={dish._id}
           name={dish.name}
           description={dish.description}
           price={dish.price}
           image={dish.image} />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
