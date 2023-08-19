import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
export const PreparingOrderScreen =()=> {
 const navigation = useNavigation()
 useEffect(()=>{
 setTimeout(()=>{
 navigation.navigate('Delivery')
 },4000)
 },[])
  
    return (
      <SafeAreaView className="pt-10 bg-white flex-1 items-center justify-center">
        <Animatable.Image
          source={require("../../assets/deliveryboy2.gif")}
          animation="slideInUp"
          iterationCount={1}
          className="w-96 h-96"
        />
        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          className="text-sm text-orange-300 font-bold text-center"
        >
          Waiting for restaurant to accept your order
        </Animatable.Text>
        <Animatable.Image
          source={require("../../assets/loading.gif")}
          animation="slideInUp"
          iterationCount={1}
          className="w-14 h-14"
        />
      </SafeAreaView>
    );
  }


export default PreparingOrderScreen;
