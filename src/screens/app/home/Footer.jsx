import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View>
      <Image source={require('../../../../assets/images/laptop.jpg')} resizeMode="cover" style={styles.image}/>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200,
        borderRadius:20
    }
})