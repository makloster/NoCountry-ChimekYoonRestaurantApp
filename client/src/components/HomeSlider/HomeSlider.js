import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "./styles";

const HomeSlider = () => {
  return (
    <View style={styles.container}>
      <Text>Inicia ahora pide tu plato</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis
        justo in arcu lacinia scelerisque tristique fringilla arcu. Aenean
        viverra torto
      </Text>
      <Button title="Iniciar" />
    </View>
  );
};

export default HomeSlider;
