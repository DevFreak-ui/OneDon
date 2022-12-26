import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer'
import Colors from '../utils/colors'
import Profile from '../components/profile'


export function DrawerContent(props) {
    return(
        <View style={styles.continer}>
            <Profile />
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
    }
})