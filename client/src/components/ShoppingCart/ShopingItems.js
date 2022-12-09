import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "../FoodMenu/stylesScrollMenu";
import React from "react";
import Counter from "../Counter/Counter";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ShopingItems = ({active}) => {

  const {carrito} = useContext(CartContext);

  return (
   
    <FlatList
      data={carrito}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddinTop: 50 }}
      scrollEventThrottle={16}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View
            key={item.id}
            style={active ? styles.containerHorizontal : styles.container}
          >
            <View
              style={
                active ? styles.containerDishHorizontal : styles.containerDish
              }
            >
              <TouchableOpacity
                style={active ? styles.imageFrameHorizontal : styles.imageFrame}
              >
                <Image
                  style={active ? styles.imageHorizontal : styles.image}
                  source={item.image}
                />
              </TouchableOpacity>
              <View
                style={
                  active ? styles.containerTextHorizontal : styles.containerText
                }
              >
                <Text
                  style={active ? styles.nameTextHorizontal : styles.nameText}
                >
                  {item.name}
                </Text>
                <Text style={styles.valueText}>$ {item.price}</Text>
              </View>
              <Counter active={active} />
              {active && (
                <TouchableOpacity>
                  <Image
                    style={styles.removeIcon}
                    source={require("../../../assets/Icons/removeIcon.png")}
                  ></Image>
                </TouchableOpacity>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

export default ShopingItems;
