import React from 'react'
import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import Colors from '../utils/colors'


const UserView = () => {

    const userImage = require('../../assets/images/profile.jpeg')

    return(
        <View style={styles.userContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={userImage} />
            </View>
            <Text style={styles.user}> Joseph Agere Azumbil </Text>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={styles.lvlTxt}> Level One Donor </Text>
                <View style={styles.lvlStat}></View>
            </View>
        </View>
    )
}


export function DrawerContent(props) {
    return(
        <View style={styles.continer}>
            <UserView />
            <DrawerContentScrollView>
                <DrawerItemList {...props} 
                    drawerActiveTintColor={Colors.primary}
                />
            </DrawerContentScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    continer: {
        flex: 1,
    },
    userContainer: {
        height: 190,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform == 'ios'? 70: 90
    },
    imageContainer: {
        width: '43%',
        height: '65%',
        backgroundColor: 'rgba(151, 122, 248, .2)',
        borderRadius: 100,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    user: {
        fontSize: 17,
        fontWeight: '800',
        color: Colors.dark,
        paddingTop: 5,
    },
    lvlTxt: {
        fontSize: 15,
        color: 'rgba(0,0,0,.4)'
    },
    lvlStat: {
        width: 8,
        height: 8,
        backgroundColor:'#0fd415',
        borderRadius: 20,
        marginLeft: 5,
    },
    img: {
        width: '75%',
        height: '75%',
        borderRadius: 100
    }
})