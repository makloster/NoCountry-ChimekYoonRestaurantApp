import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import ScrollCategory from '../../components/FoodMenu/ScrollCategory';
import { styles } from './stylesFoodMenu';

const FoodMenu = ({ navigation }) => {
  let textInputDefaultValue = 'Buscar plato ...';
  let textInputPlaceHolderColor = '#FFFFFF';
  let hamburgerMenu = require('../../../assets/FoodMenu/HamburgerMenu.png');
  let chimekYoonIcon = require('../../../assets/FoodMenu/ChimekYoonIcon.png');
  return (
    <View style={styles.menuContainer}>
      <Image style={styles.hamburgerMenu} source={hamburgerMenu} />
      <Image style={styles.logo} source={chimekYoonIcon} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Menu</Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={textInputDefaultValue}
        placeholderTextColor={textInputPlaceHolderColor}
      />
      <ScrollCategory />
    </View>
  );
};

export default FoodMenu;
