import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import Categories from './Categories'
import Card from './Card'

const HomeScreen = () => {

  const data = [
    {
      title:"Slightly worn pair of German made Sneakers",
      location:"South Side NMU",
      quantity:2,
      id:"123",
      image:require("../../../../assets/images/cardImage.jpg")
    },
    {
      title:"Slightly worn pair of German made Sneakers",
      location:"South Side NMU",
      quantity:2,
      id:"123;lsl",
      image:require("../../../../assets/images/cardImage.jpg")
    },
    {
      title:"Slightly worn pair of German made Sneakers",
      location:"South Side NMU",
      quantity:2,
      id:"123oao",
      image:require("../../../../assets/images/cardImage.jpg")
    },
    {
      title:"Slightly worn pair of German made Sneakers",
      location:"South Side NMU",
      quantity:2,
      id:"123poi",
      image:require("../../../../assets/images/cardImage.jpg")
    },
    {
      title:"Slightly worn pair of German made Sneakers",
      location:"South Side NMU",
      quantity:2,
      id:"123wiua",
      image:require("../../../../assets/images/cardImage.jpg")
    },
  ]
  return (
    <View style={styles.container}>
        <Header />
        <Categories/>
        <FlatList data={data}
        style={{marginTop:15}}
        renderItem={({item,index})=><Card details={item} />}
        keyExtractor={item=>item.id}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  content:{
    paddingHorizontal:20,
    paddingVertical:20
    
  },
    container:{
        flex:1
    }
})