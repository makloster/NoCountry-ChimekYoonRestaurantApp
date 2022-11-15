import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#22191C',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  titleContainer: {
    marginTop: 100,
    marginLeft: '5%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
  },
  textInput: {
    color: '#FFFFFF',
    marginTop: 25,
    marginLeft: '5%',
    marginRight: 'auto',
    width: 350,
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 10,
  },
  logo: { position: 'absolute', top: 45, right: '5%' },
  hamburgerMenu: { position: 'absolute', top: 60, left: '5%' },
});
