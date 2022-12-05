import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import ConfirmationModal from '../ConfirmationModals/ConfirmationModal';
import { useNavigation } from '@react-navigation/native';

const FootherBtns = (props) => {
  const {
    styleContainerFootherBtns,
    styleAddBtn,
    styleTextAddBtn,
    styleConfirmBtn,
    styleTextConfirmBtn,
    textAddBtn,
    textConfirmBtn,
    confirmation,
    onPressConfirmation,
    setConfirmation
    
  } = props;

  const navigation=useNavigation();
  
  return (
    <View style={styleContainerFootherBtns}>
      <ConfirmationModal confirmation={confirmation} setConfirmation={setConfirmation}/>
      <TouchableOpacity 
          style={styleAddBtn}
          onPress={()=>{
            navigation.navigate('FoodMenu')
          }}
        >
        <Text style={styleTextAddBtn}>{textAddBtn}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styleConfirmBtn}
        onPress={onPressConfirmation} >
        <Text style={styleTextConfirmBtn}>{textConfirmBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FootherBtns;
