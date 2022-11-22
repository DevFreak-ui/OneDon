import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import Colors from '../colors';

const CustomBtn1 = (props) =>{
    const onPress = () => {alert('Button')};

    return(
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            <Text style={styles.btnTxt}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    btnTxt: {
        color: '#f2f2f2',
        fontSize: 20,
        fontWeight: 'bold'
    }
})


export default CustomBtn1;