import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './stylesTableWidget';
import { useNavigation } from '@react-navigation/native';


const TableWidget = () => {

    const navigation = useNavigation();
    
    return (
        <TouchableOpacity 
            style={styles.widgetContainer}
            onPress={()=>{
                navigation.navigate('StatusTables')
            }}
            
            >
            <View style={styles.state}></View>
            <Image source={require('../../../assets/Icons/tableWhite.png')} />
            <Text style={styles.tableName}>1</Text>
        </TouchableOpacity>
    );
}

export default TableWidget;
