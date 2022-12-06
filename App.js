import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native"
import DrawerNav from "./src/navigators/Drawer"


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
  );
}


