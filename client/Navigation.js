import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodMenu from "./src/screens/FoodMenu/FoodMenu";
import Home from "./src/screens/Home/Home";
import { Image, Text } from "react-native";
import HomeLogo from "./assets/Navigation/Home.png";
import ShopLogo from "./assets/Navigation/Shop.png";
import ShoppingCart from "./src/screens/ShoppingCart/ShoppingCart";

// screens

const Tab = createBottomTabNavigator();

const screenOptions = () => ({
  tabBarStyle: {
    backgroundColor: "#22191C",
    height: 80,
  },
  tabBarLabel: () => {
    return null;
  },
  headerShown: false,
});

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="FoodMenu" {...{ screenOptions }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <Image source={HomeLogo} /> : <Image source={HomeLogo} />,
        }}
        name="FoodMenu"
        component={FoodMenu}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <Image source={ShopLogo} /> : <Image source={ShopLogo} />,
        }}
        name="ShoppingCart"
        component={ShoppingCart}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
