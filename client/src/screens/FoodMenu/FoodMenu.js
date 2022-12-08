import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ButtonConfirmation from '../../components/FoodMenu/ButtonConfirmation/ButtonConfirmation';
import MenuModal from '../../components/FoodMenu/MenuModal/MenuModal';
import ScrollCategory from '../../components/FoodMenu/ScrollCategory';
import ScrollMenu from '../../components/FoodMenu/ScrollMenu';
import TableWidget from '../../components/tableWidget/tableWidget';
import { styles } from './stylesFoodMenu';
const FoodMenu = ({ navigation }) => {
  let textInputDefaultValue = 'Buscar plato ...';
  let textInputPlaceHolderColor = '#FFFFFF';
  let hamburgerMenu = require('../../../assets/FoodMenu/HamburgerMenu.png');
  let chimekYoonIcon = require('../../../assets/FoodMenu/ChimekYoonIcon.png');

  const [confirmation, setConfirmation] = useState(false);

  const showModal = () => {
    setConfirmation(true);
  };

  return (
    <SafeAreaView style={styles.menuContainer}>
      <MenuModal
        confirmation={confirmation}
        setConfirmation={setConfirmation}
      />
      <TouchableOpacity style={styles.hamburgerMenuContainer}>
        <Image source={hamburgerMenu} />
      </TouchableOpacity>

      <Image style={styles.logo} source={chimekYoonIcon} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reserva tu comida</Text>
        <TableWidget />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder={textInputDefaultValue}
        placeholderTextColor={textInputPlaceHolderColor}
      />
      {/*  <ButtonConfirmation showModal ={showModal}/> */}

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Categorías</Text>
      </View>
      <ScrollCategory />
      <ScrollMenu />
    </SafeAreaView>
  );
};

export default FoodMenu;
