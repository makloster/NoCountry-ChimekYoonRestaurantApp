import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';


const ButtonTable = (props) => {
    const { onPress, text } = props;
    const [btnActive, setBtnActive] = useState(false);

  return (
    <TouchableOpacity onPress={onPress} style={
        !btnActive
          ? styles.tableBtnDisabled
          : styles.tableBtn
      } disabled={!btnActive}>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
tableBtn:{
    backgroundColor: '#EB7828',
    width: 236,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    paddingTop: 10,
    marginTop: '20%',
},
tableBtnDisabled: {
    backgroundColor: '#BF8C69',
    width: 236,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    paddingTop: 10,
   
    marginTop: '20%',
  },
  textBtn: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight:'500'
  },
});
export default ButtonTable;
