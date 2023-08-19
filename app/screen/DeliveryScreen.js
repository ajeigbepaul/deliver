import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurantItems } from "../../features/restaurantSlice";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurantItems);
  return (
    <View className="bg-orange-300 flex-1">
      {/* This is done so that the map can be below the safeAreaView */}
      <SafeAreaView className="pt-10 z-50">
        <View className="p-4 flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-white font-light text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-3 my-2 p-4 rounded-md z-50 shadow-md">
          <View className="flex-row items-center justify-between mb-3">
            <View>
              <Text className="text-gray-400 text-sm">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={require("../../assets/deleveryrider.jpeg")}
              className="w-14 h-14 rounded-full object-cover bg-gray-200"
            />
          </View>
          <Animatable.Image
            source={require("../../assets/loading2.gif")}
            animation="slideInUp"
            iterationCount={1}
            className="w-36 h-2"
          />
          <Text className="mt-3 text-gray-400">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.descr}
          identifier="origin"
          pinColor="orange"
        />
      </MapView>
    </View>
  );
};

export default DeliveryScreen;
