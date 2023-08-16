import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import Constants from "expo-constants";
import * as Icons from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import client from "../../sanity";
export default function HomeScreen() {
  const navigation = useNavigation();
  const [featured, setFeatured] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const getFeatured = async () => {
    try {
      const data = await client.fetch(`
        *[_type == "featured"] {
          ...,  // Include other fields you need
          restaurant[]->{
            ...,  // Include restaurant fields you need
            dishes[]->{
              ...,
            }
          }
        }
      `);
    //  console.log(data)
      setFeatured(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeatured();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* user */}
      <View className="bg-white px-3 pt-10">
        <View className="flex-row space-x-2 pb-3 items-center">
          <Image
            source={require("../../assets/profilepics.jpg")}
            className="w-10 h-10 rounded-full object-cover"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">
              Current location <Icons.ChevronDownIcon size={20} color="gray" />
            </Text>
          </View>
          <Icons.UserIcon color="dodgerblue" size={30} />
        </View>
        {/* Search */}
        <View className="flex-row items-center mb-3 space-x-2">
          <View className="flex-1 flex-row items-center space-x-1 bg-slate-200 px-2 rounded-lg">
            <Icons.MagnifyingGlassIcon color="orange" size={30} />
            <TextInput
              className="p-2 flex-1"
              placeholder="Make your search"
              keyboardType="default"
            />
          </View>
          <Icons.AdjustmentsVerticalIcon color="orange" />
        </View>
        {/* Body */}
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
        {/* Categories */}
        <Categories />
        {/* Features */}
        {featured?.map((feature) => (
          <FeatureRow
            key={feature._id}
            title={feature.name}
            descr={feature.description}
            id={feature._id}
          />
        ))}
        {/* <FeatureRow title="Mamma Buka" descr="You want local?" id="2" />
        <FeatureRow
          title="Belleful"
          descr="Made with all the condiments"
          id="3"
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // padding:Constants.statusBarHeight,
    // paddingStart:50,
  },
});
