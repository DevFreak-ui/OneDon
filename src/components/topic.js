/*
    Title appears on each page
    It tells the user what page he/she is on
    eg: <(back icon) Item Details
*/

import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const Topic = ({title}) => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Icon name="chevron-left" size={35} color={Colors.primary} onPress={() => navigation.goBack()} />
            <Text style={styles.content}> {title} </Text>
            <View></View>
        </View>
    )
}

export default Topic;

const styles = StyleSheet.create({
    container: {
        marginVertical:Platform == 'ios' ? 60 : 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
content: {
    fontSize: 25,
    fontWeight: 'bold',
}
})