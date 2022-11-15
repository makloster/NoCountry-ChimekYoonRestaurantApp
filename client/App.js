import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MainStack from './navigation/MainStack';
/* import FoodMenu from './src/screens/FoodMenu/FoodMenu'; */

export default function App() {
  return (
    <View>
      {/* <FoodMenu />*/}
      <MainStack />
    </View>
  );
}
