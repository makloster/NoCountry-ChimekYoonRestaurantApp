import React from 'react';
import { useState } from 'react';
import { View, Text, Image, ImageBackground, Pressable, FlatList, TouchableOpacity} from 'react-native';
import { styles } from './stylesTables';
import ButtonTable from './ButtonTable';
import { useNavigation } from '@react-navigation/native';

const Tables = () => {
    const data = [
        { id:1, label: 'Mesa 1', state:'Disponible' },
        { id:2, label: 'Mesa 2', state:'No disponible'},
        { id:3, label: 'Mesa 3', state:'Disponible'},
        { id:4, label: 'Mesa 4', state:'Disponible'},
        { id:5, label: 'Mesa 5', state:'Disponible'},
        { id:6, label: 'Mesa 6', state:'Disponible'},
        { id:7, label: 'Mesa 7', state:'Disponible'},
        { id:8, label: 'Mesa 8', state:'Disponible'},
      ];

    const [selectedItem, setSelectedItem] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    const [btnActive, setBtnActive] = useState(false);

    const onSelect = (item) => {
        setSelectedItem(item)
    }

    const onSelectedItem = (item) => {
        setShowOptions(false)
        onSelect(item)
        console.log(value)
        setBtnActive(true)

    }
    
    let value = selectedItem
    console.log(value)
    const navigation = useNavigation(); 
    return (
       
     
            <ImageBackground source={require('../../../assets/Tables/tables-background.png')} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.headingContainer}>
                    <Image source ={require('../../../assets/Tables/ChimekYoonIcon.png')}/>
                    <Text style={styles.heading}>¿Cuál es la mesa que vas a atender?</Text>
                    
                    
                  
                </View>
                <View  >
                    <Pressable style={styles.selectBar} onPress={()=>setShowOptions(!showOptions)} >
                            <Image style={styles.iconTable} source={require('../../../assets/Tables/table-icon.png')} />
                            <View style={styles.textContainer}>
                                <Text style={[styles.text, value==={}&&{display:'none'}]}>No definida</Text>
                                <Text style={styles.mainText}>{value===null?"Seleccionar una mesa":value.label}</Text>
                            </View>
                            
                            <View style={styles.arrowContainer}>
                                <Image style={styles.iconArrow} source={require('../../../assets/Tables/arrow-icon.png')} />
                            </View>
                        
                        
                    </Pressable >
                    {showOptions && <FlatList
                            data={data}
                            style={styles.listContainer}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddinTop: 0 }}
                            scrollEventThrottle={16}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                <TouchableOpacity key={item.id} 
                                      style={styles.itemList} 
                                      onPress={()=>onSelectedItem(item)}
                                      disabled={item.state==='No disponible'&&true}
                                >
                                    <Text style={item.state==='No disponible'&&{opacity:0.4}} >{item.label}</Text>
                                    <Text style={[styles.itemState, item.state==='No disponible'&&{opacity:0.4}]}>{item.state}</Text>
                                </TouchableOpacity>
                                );
                            }}
                        />}
                </View>
                
                <ButtonTable
                    text="Continuar"
                    onPress={() => {
                    navigation.navigate("MyTabs");
                    }}
                    btnActive={btnActive}
                    
                />
            </ImageBackground>
     
    );
}

export default Tables;
