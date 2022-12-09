import { React, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ShopingItems from "../ShoppingCart/ShopingItems";
import { styles } from "./stylesCounter";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const Counter = ({ active, items, setItems, item }) => {

  const {carrito, agregarProductoCarrito} = useContext(CartContext);

 

  const [valueQuantity, setValueQuantity] = useState(0);

  let plus = "+";
  let minus = "-";

  function onAdd(){
    const productoCarrito = {id: item._id, name: item.name, price:item.price, image: item.image, cantidad: valueQuantity}
    agregarProductoCarrito(productoCarrito)
    console.log(carrito,"carrito este es")

}


  const onPressPlus = () => {
    setValueQuantity(valueQuantity + 1);
    //items.push(item);
    //console.log(items)
  };

  const onPressMinus = () => {
    if (valueQuantity <= 0) {
    } else if (valueQuantity > 0) {
      setValueQuantity(valueQuantity - 1);
      //const indice=items.findIndex(i => i.id === item.id)
      //items.splice(indice, 1)
      //console.log(items)
      
    } 
  };

  return (
    <View style={styles.botonContainer}>
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
      
    </View>
    <TouchableOpacity 
    onPress={onAdd}>
      <Text style={styles.text}>Boton</Text>
    </TouchableOpacity>
    </View>
  );
};

export default Counter;
