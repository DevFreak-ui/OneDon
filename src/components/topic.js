/*
    Title appears on each page
    It tells the user what page he/she is on
    eg: <(back icon) Item Details
*/

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from "../colors";

const Topic = ({title}) => {
    return(
        <View style={styles.container}>
            <Icon name="chevron-left" size={35} color={Colors.primary} />
            <Text style={styles.content}> {title} </Text>
            <View></View>
        </View>
    )
}

export default Topic;

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
content: {
    fontSize: 25,
    fontWeight: 'bold',
}
})