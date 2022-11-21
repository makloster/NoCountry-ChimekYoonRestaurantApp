import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const FootherBtns = (props) => {
  const {
    styleContainerFootherBtns,
    styleAddBtn,
    styleTextAddBtn,
    styleConfirmBtn,
    styleTextConfirmBtn,
    textAddBtn,
    textConfirmBtn,
  } = props;
  return (
    <View style={styleContainerFootherBtns}>
      <TouchableOpacity style={styleAddBtn}>
        <Text style={styleTextAddBtn}>{textAddBtn}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styleConfirmBtn}>
        <Text style={styleTextConfirmBtn}>{textConfirmBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FootherBtns;
