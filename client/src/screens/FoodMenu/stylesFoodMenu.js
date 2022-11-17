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

  subTitleContainer: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: '5%',
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: 20,
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
  hamburgerMenuContainer: {
    alignItems: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    top: 60,
    left: '5%',
  },
  logo: { position: 'absolute', top: 45, right: '5%' },
});
