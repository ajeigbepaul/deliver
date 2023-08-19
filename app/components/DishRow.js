import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { urlFor } from "../../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector} from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemswithId,
} from "../../features/basketSlice";
const DishRow = ({ id, name, description, price, image }) => {
  const items = useSelector((state) => selectBasketItemswithId(state, id));
  const dispatch = useDispatch();
  const handleAddtoBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const handleRemoveitem = ()=>{
    if(!items?.length > 0) return;
    dispatch(removeFromBasket({id}))
  }
  let naira = Intl.NumberFormat("en-NGN");
  const [ispressed, setIspressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${
          ispressed && "border-b-0"
        }`}
        onPress={() => setIspressed(!ispressed)}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>

            <Text className="text-gray-400 mt-2">₦ {naira.format(price)}</Text>
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
            <TouchableOpacity
              onPress={handleRemoveitem}
              disabled={!items.length}
            >
              <MinusCircleIcon
                color={items.length > 0 ? "orange" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={handleAddtoBasket}>
              <PlusCircleIcon color="orange" size={50} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
