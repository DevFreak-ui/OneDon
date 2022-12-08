import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native"
import DrawerNav from "./src/navigators/Drawer"
import Stack from './src/navigators/Stack';


export default function App() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}


