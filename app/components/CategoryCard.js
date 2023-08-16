import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../../sanity";
const CategoryCard = ({ imageurl, title }) => {
  return (
    <TouchableOpacity>
      <View className="relative mr-2">
        <Image source={{uri:urlFor(imageurl).url()}} className="w-24 h-24 rounded-md " />
        <Text className="absolute bottom-1 left-0 w-full text-orange-200 bg-black/50 font-semibold items-center text-center justify-center">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
