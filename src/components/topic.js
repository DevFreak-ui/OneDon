/*
    Title appears on each page
    It tells the user what page he/she is on
    eg: <(back icon) Item Details
*/

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "../colors";

const Topic = ({title}) => {
    return(
        <View style={styles.container}>
            <Ionicons name="md-checkmark-circle" size={30} color={Colors.primary} />
            <Text style={styles.content}> {title} </Text>
            <View></View>
        </View>
    )
}

export default Topic;

const styles = StyleSheet.create({
    container: {
        marginVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
content: {
    fontSize: 25,
    fontWeight: 'bold',
}
})