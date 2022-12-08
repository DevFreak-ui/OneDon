import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import {Picker} from '@react-native-picker/picker'
import Colors from "../utils/colors"
import { withDecay } from "react-native-reanimated"



const Category = () => {
    
    const [selectedCategory, setSelectedCategory] =useState()

    return (
        <View>
            <Text style={styles.label}>Category</Text>
            <View  style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCategory}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedCategory(itemValue)
                    }>
                    <Picker.Item label="general" value="General" />
                    <Picker.Item label="books" value="Books" />
                    <Picker.Item label="clothing" value="Books" />
                    <Picker.Item label="gadgets" value="Gadgets" />
                </Picker>
            </View>
        </View>
    );
}

export default Category;


const styles = StyleSheet.create({
    pickerContainer: {
        height: 50,
        borderColor: Colors.primary,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        marginBottom: 10
    },
    label: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: Colors.light, 
        marginVertical: 10
    }
})