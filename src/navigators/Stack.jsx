import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'

// Screens
import Login from '../screens/authentication/login'
import ForgotPassword from '../screens/authentication/forgotPassword'
import ItemDetails from '../screens/item_details'
import DrawerNav from './Drawer'

const StackNavigator = createNativeStackNavigator()

const Stack = () => {
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
    <StackNavigator.Navigator screenOptions={{
        headerShown:false
    }}
    initialRouteName='login'
    >
        <StackNavigator.Screen name="login" component={Login} />
        <StackNavigator.Screen name="home" component={DrawerNav} />
        <StackNavigator.Screen name="forgotPass" component={ForgotPassword}/>
        <StackNavigator.Screen name="itemDetails" component={ItemDetails} />
    </StackNavigator.Navigator>
  )
}

export default Stack

const styles = StyleSheet.create({})