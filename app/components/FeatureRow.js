import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import * as Icons from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../../sanity";
const FeatureRow = ({ id, title, descr }) => {
  const [restaurant, setRestaurant] = useState([]);
  const getFeaturedRestaurant = async () => {
    try {
      const data = await client.fetch(
        `
        *[_type == 'featured' && _id == $id]{
        ...,
        restaurant[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
      `,
        { id }
      );
      // console.log("Fetched data:", data?.restaurant);
      setRestaurant(data?.restaurant)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeaturedRestaurant();
  }, []);
  return (
    <View>
      <View className="mt-6 px-3">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold">{title}</Text>
          <Icons.ArrowRightIcon color="dodgerblue" />
        </View>
        <Text className="xs font-normal text-gray-400">{descr}</Text>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 5,
          }}
          showsHorizontalScrollIndicator={false}
          className="pt-4"
        >
          {restaurant.map((catRes) => (
            <RestaurantCard
              key={catRes._id}
              id={catRes._id}
              imageurl={catRes.image}
              title={catRes.name}
              rating={catRes.rating}
              genre={catRes.type.name}
              address={catRes.address}
              descr={catRes.description}
              dishes={catRes.dishes}
              long={catRes.long}
              lat={catRes.lat}
            />
          ))}
          {/* <RestaurantCard
            id={1}
            imageurl={require("../../assets/food4.jpeg")}
            title="African Resturant"
            rating="4.0"
            genre="Local"
            address="Nos 12, Ade Jones, Lagos"
            descr="The very best of local dishes"
            dishes={[]}
            long={20}
            lat={10}
          />
          <RestaurantCard
            id={1}
            imageurl={require("../../assets/food5.jpeg")}
            title="African Resturant"
            rating="4.0"
            genre="Local"
            address="Nos 12, Ade Jones, Lagos"
            descr="The very best of local dishes"
            dishes={[]}
            long={20}
            lat={10}
          /> */}
        </ScrollView>
      </View>
    </View>
  );
};

export default FeatureRow;
