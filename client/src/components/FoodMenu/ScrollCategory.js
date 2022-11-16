import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { styles } from './stylesScrollCategory';


const ScrollCategory = () => {

  const categorias = [
    {
      id: 1,
      name: "Chimek",
      thumbnail:require("../../../assets/Home/principal.png")
    },
    {
      id: 2,
      name: "Chimek",
      thumbnail:require("../../../assets/Home/principal.png")
    },
    {
      id: 3,
      name: "Chimek",
      thumbnail:require("../../../assets/Home/principal.png")
    }
 

  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={
          
           categorias
          
        }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddinTop: 50 }}
        scrollEventThrottle={16}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          return (
            <View style={item.id % 2 === 0 ? styles.categoryContainerDark : styles.categoryContainerOrange }>
              <View style={styles.category} >
                <View style={styles.imageFrame}>
                  <Image style={styles.image}
                    source={
                        item.thumbnail
                      }
                    
                  />
                </View>
                <View >
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ScrollCategory;
