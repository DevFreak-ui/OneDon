import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <ImageBackground imageStyle={styles.image} resizeMode='cover' source={require('../../../../assets/images/headerBg.jpg')} style={styles.container}>
    <View style={styles.wrapper}>
      <Text>Header</Text>
    </View>
    </ImageBackground>
  )
}

export default Header

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:"rgba(0,0,0,0.3)",
        height:'100%',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        paddingHorizontal:20,
        paddingTop:Platform.OS === 'ios'? 40: 30
    },
    image:{
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    container:{
        width:'100%',
        height:200,
     
    }
})