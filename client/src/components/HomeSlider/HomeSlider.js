import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "./styles";

const HomeSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading1}>Inicia ahora </Text>
        <Text style={styles.heading2}>pide tu plato</Text>
      </View>
      
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
