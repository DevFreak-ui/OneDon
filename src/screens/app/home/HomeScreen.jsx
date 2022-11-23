import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Header />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})