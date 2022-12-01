import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './stylesTableWidget';
import Tables from '../Tables/Tables';


const TableWidget = () => {

    
    return (
        <View style={styles.widgetContainer}>
            <View style={styles.state}></View>
            <Image source={require('../../../assets/Icons/tableWhite.png')} />
            <Text style={styles.tableName}>1</Text>
        </View>
    );
}

export default TableWidget;
