import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import client from "../../sanity";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const data = await client.fetch(`
   *[_type == "category"]
  `);
    // console.log(data);
    setCategory(data);
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {category?.map((cat) => (
        <CategoryCard key={cat._id} imageurl={cat.image} title={cat.name} />
      ))}
    </ScrollView>
  );
};

export default Categories;
