import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { DrawerContent } from '../screens/DrawerContent'
// Screens
import HomeScreen from '../screens/app/home/HomeScreen'
import ItemDetails from '../screens/item_details'
import { Feather } from '@expo/vector-icons'
import Colors from '../utils/colors'
import AddItem from '../screens/AddItem'
import ChangePass from '../screens/authentication/changePassword'
import CashScreen from '../screens/app/cashDonation/CashScreen'
import AddFund from '../screens/app/cashDonation/AddFund'
import PaymentGateway from '../screens/app/cashDonation/PaymentGateway'
const Drawer = createDrawerNavigator();

function DrawerNav() {
  let [fontsLoaded] = useFonts({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_600SemiBold,
      Poppins_700Bold
  })
  if (!fontsLoaded){
      return null
  }
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: false,
        drawerLabelStyle: {fontSize: 15, fontWeight: '600'},
        drawerActiveTintColor: Colors.primary,
      }} 
      drawerContent={props => <DrawerContent {...props}/>}
      >
      <Drawer.Screen name="Home" component={HomeScreen} 
        options={{
          drawerIcon: () => (
            <Feather name='home' size={15}/>
          )
        }}
      />
      <Drawer.Screen name="ChangePassword" component={ChangePass} 
        options={{
          drawerIcon: () => (
            <Feather name='shield' size={15}/>
          )
        }}
      />
      <Drawer.Screen name="Product Donation" component={AddItem} 
        options={{
          drawerIcon: () => (
            <Feather name='gift' size={15}/>
          )
        }}
      />
      <Drawer.Screen name="CashDonation" component={CashScreen} 
        options={{
          drawerIcon: () => (
            <Feather name='dollar-sign' size={15}/>
          )
        }}
      />
      <Drawer.Screen name="History" component={ItemDetails} 
        options={{
          drawerIcon: () => (
            <Feather name='bookmark' size={15}/>
          )
        }}
      />
      <Drawer.Screen name="Help" component={ItemDetails} 
        options={{
          drawerIcon: () => (
            <Feather name='help-circle' size={15}/>
          )
        }}
      />
      <Drawer.Screen name="Logout" component={ItemDetails} 
        options={{
          drawerIcon: () => (
            <Feather name='log-out' size={15}/>
          )
        }}
      />
      <Drawer.Screen name="AddFund" component={AddFund} 
        options={{
          drawerIcon: () => (
            <Feather name='log-out' size={15}/>
          )
        }}
      />
      <Drawer.Screen name="paymentType" component={PaymentGateway} 
        options={{
          drawerIcon: () => (
            <Feather name='log-out' size={15}/>
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav