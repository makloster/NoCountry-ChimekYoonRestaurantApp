import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { onPress, text } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.homeBtn}>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  homeBtn: {
    backgroundColor: '#EB7828',
    width: 200,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    paddingTop: 10,
    marginLeft: '25%',
    marginTop: '20%',
  },
  textBtn: {
    color: '#FFFFFF',
    fontSize: 25,
  },
});

export default Button;
