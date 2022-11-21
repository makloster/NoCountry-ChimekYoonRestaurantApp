import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   

    backgroundImage:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent:'center',
        alignItems:'center'
    },

    headingContainer:{
       
        flexDirection:'column',
        alignItems:'center'
    },

    
    heading: {
        marginTop:20,
        color:'#FFFFFF',
        textAlign:'center',
        fontSize:30,
        fontWeight:'500',
        lineHeight:35.8
       
    }
  
   
  });