import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';

const ScrollCategory = () => {
  return (
    <View>
      <FlatList
        data={
          {
            /*En data va un Array/Json/Api de la ruta de las imagenes*/
          }
        }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddinTop: 50 }}
        scrollEventThrottle={16}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          return (
            <View>
              <View>
                <Image
                  source={
                    {
                      /* En el Source van las imagenes de la categoria  */
                    }
                  }
                />
                <Text>{/* AQUI VAN LOS NOMBRES DE LAS CATEGORIAS  */}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ScrollCategory;
