import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "../FoodMenu/stylesScrollMenu";
import React from "react";
import Counter from "../Counter/Counter";
import { useSelector } from "react-redux";

const ShopingItems = ({ active }) => {
  const cart = useSelector((state) => state.cart);
  console.log(cart, "data redux ahora");

  return cart && cart.map((el) => <Text>{el.name}</Text>);
};

export default ShopingItems;
