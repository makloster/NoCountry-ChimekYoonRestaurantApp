import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Button from '../Button';



const HomeSlider = () => {
  const navigation = useNavigation(); 
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
      <View>
        <Button
          text="Inicio"
          onPress={() => {
            navigation.navigate("MyTabs");
          }}
        />
      </View>
    </View>
  );
};

export default HomeSlider;
