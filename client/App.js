import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MainStack from './navigation/MainStack';
import FoodMenu from './src/screens/FoodMenu/FoodMenu'; 
import Home from './src/screens/Home/Home';

export default function App() {
  return (
    <View>
      {/*<Home />*/}
      <FoodMenu />
      {/*<MainStack />*/}
    </View>
  );
}
