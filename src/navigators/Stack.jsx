import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/app/home/HomeScreen'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
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
    }}>
        <StackNavigator.Screen name="app" component={HomeScreen} />
    </StackNavigator.Navigator>
  )
}

export default Stack

const styles = StyleSheet.create({})