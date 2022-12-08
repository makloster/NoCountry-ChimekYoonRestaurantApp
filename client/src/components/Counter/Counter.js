import { React, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ShopingItems from "../ShoppingCart/ShopingItems";
import { styles } from "./stylesCounter";

const Counter = ({ active, items, setItems, item }) => {
  const [valueQuantity, setValueQuantity] = useState(0);

  let plus = "+";
  let minus = "-";

  const onPressPlus = () => {
    setValueQuantity(valueQuantity + 1);
    items.push(item);
    console.log(items)
  };

  const onPressMinus = () => {
    if (valueQuantity <= 0) {
    } else if (valueQuantity > 0) {
      setValueQuantity(valueQuantity - 1);
      const indice=items.findIndex(i => i.id === item.id)
      items.splice(indice, 1)
      console.log(items)
      
    } 
  };

  return (
    <View
      style={
        active ? styles.containerQuantityHorizontal : styles.containerQuantity
      }
    >
      <TouchableOpacity
        onPress={active ? onPressMinus : onPressPlus}
        style={active ? styles.decreaseBtnHorizontal : styles.increaseBtn}
      >
        <Text style={active ? styles.minusTextHorizontal : styles.plusText}>
          {active ? minus : plus}
        </Text>
      </TouchableOpacity>
      <View
        style={
          active
            ? styles.containerValueQuantityHorizontal
            : styles.containerValueQuantity
        }
      >
        <Text
          style={active ? styles.valueQuantityHorizontal : styles.valueQuantity}
        >
          {valueQuantity}
        </Text>
      </View>
      <TouchableOpacity
        onPress={active ? onPressPlus : onPressMinus}
        style={active ? styles.increaseBtnHorizontal : styles.decreaseBtn}
      >
        <Text style={active ? styles.plusText : styles.minusText}>
          {active ? plus : minus}
        </Text>
      </TouchableOpacity>
      <Text></Text>
    </View>
  );
};

export default Counter;
