import React from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground} from 'react-native';
import { styles } from './stylesTables';
import ButtonTable from './ButtonTable';
import { useNavigation } from '@react-navigation/native';
const Tables = () => {

    const navigation = useNavigation(); 
    return (
       
     
            <ImageBackground source={require('../../../assets/Tables/tables-background.png')} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.headingContainer}>
                    <Image source ={require('../../../assets/Tables/ChimekYoonIcon.png')}/>
                    <Text style={styles.heading}>¿Cuál es la mesa que vas a atender?</Text>
                </View>
                <ButtonTable
                    text="Continuar"
                    onPress={() => {
                    navigation.navigate("MyTabs");
                    }}
                />
            </ImageBackground>
     
    );
}

export default Tables;
