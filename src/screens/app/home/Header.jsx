import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import Colors from '../../../utils/colors'
import fontStyle from '../../../utils/fontStyles'

const Header = () => {
  return (
    <ImageBackground imageStyle={styles.image} resizeMode='cover' source={require('../../../../assets/images/headerBg.jpg')} style={styles.container}>
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.menu}>
        {/* Replace this with that icon, I could  not find the one in the design on the vector icons directory */}
        <Feather name="menu" size={20} color={Colors.dark} />
      </TouchableOpacity>

    <View style={styles.bottom}>
      <View style={styles.row}>
        <Text style={styles.text}>What</Text>
        <View style={styles.highlight}>
            <Text style={styles.text}>Goes</Text>
        </View>
        <Text style={styles.text}>Around,</Text>
        <View style={styles.highlight}>
            <Text style={styles.text}>Comes</Text>
        </View>
        <Text style={styles.text}>Around</Text>

      </View>
      </View>
    </View>
    </ImageBackground>
  )
}

export default Header

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    highlight:{
        backgroundColor:Colors.primary,
        paddingHorizontal:5,
        borderRadius:8,
        paddingVertical:3
    },
    text:{
        ...fontStyle.semibold,
        color:Colors.typeAColor,
        fontSize:18,
        paddingHorizontal:2
    },
    bottom:{
        position:'absolute',
        bottom:20,
        paddingHorizontal:20
    },
    menu:{
        width:30,
        height:30,
        backgroundColor:Colors.typeAColor,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    wrapper:{
        backgroundColor:"rgba(0,0,0,0.3)",
        height:'100%',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        paddingHorizontal:20,
        paddingTop:Platform.OS === 'ios'? 50: 40
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