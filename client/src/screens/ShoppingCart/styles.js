import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22191C',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { position: 'absolute', top: 45, right: '5%' },
  containerLogo: {
    paddingRight: '95%',
    paddingTop: '5%',
    marginBottom: '15%',
  },
  textInput: {
    color: '#FFFFFF',
    marginTop: 25,
    marginLeft: '5%',
    marginRight: 'auto',
    width: 300,
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 10,
  },

  containerFootherShoppingCart: {
    width: '100%',
    height: '15%',
  },
  addNoteBtn: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    paddingTop: '8%',
    borderColor: '#D6D6D6',
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    paddingRight: '57%',
    paddingTop: '6%',
  },
  textBtn: { color: '#9F9B9B', fontSize: 20 },
  containerAddNote: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnSection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '10%',
  },
  successBtn: {
    backgroundColor: '#008f39',
    paddingTop: '5%',
    width: 90,
    height: '40%',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: '8%',
  },
  cancelBtn: {
    backgroundColor: '#cc0000',
    paddingTop: '5%',
    width: 90,
    height: '40%',
    borderRadius: 10,
    alignItems: 'center',
  },

  textBtns: { color: '#FFFFFF', fontSize: 15, paddingTop: '5%' },
  containerNote: {
    width: '100%',
    height: '80%',
  },
  containerTotalOrder: {
    flexDirection: 'row',
    width: '100%',
    height: '6%',
  },
  totalOrder: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: '5%',
    marginRight: '20%',
  },
  totalValueOrder: {
    color: '#EB7828',
    fontSize: 20,
  },
  footherBtns: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
  },
  addBtn: {
    width: 210,
    height: 100,
    backgroundColor: '#EB7828',
  },
  textAddBtn: {
    textAlign: 'center',
    paddingTop: '5%',
    color: '#FFFFFF',
    fontSize: 20,
  },
  confirmBtn: {
    borderLeftColor: '#FFFFFF',
    borderLeftWidth: 1,
    width: 220,
    height: 100,
    backgroundColor: '#EB7828',
  },
  textConfirmBtn: {
    textAlign: 'center',
    paddingTop: '5%',
    color: '#FFFFFF',
    fontSize: 20,
  },
});
