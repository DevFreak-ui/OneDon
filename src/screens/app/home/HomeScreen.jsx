import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import Categories from './Categories'
import Card from './Card'
import Footer from './Footer'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Header />
        <Categories/>
        <FlatList data={[0,1,2,3,4,5]}
        style={{marginTop:15}}
        renderItem={({item,index})=><Card />}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={()=><Footer />}
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