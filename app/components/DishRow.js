import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
// import Currency from "react-currency-formatter";
import { urlFor } from "../../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
const DishRow = ({ id, name, description, price, image }) => {
  const [ispressed, setIspressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${ispressed && "border-b-0"}`}
        onPress={() => setIspressed(!ispressed)}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              {/* <Currency quantity={price} currency="NGN" /> */}
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "grey" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-200 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {ispressed && (
        <View className="p-4 bg-white">
          <View className="flex-row items-center space-x-2 mb-3">
            <TouchableOpacity>
              <MinusCircleIcon color="dodgerblue" size={30} />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon color="dodgerblue" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
