/*
    There are types of input fields for this projet (say TypeA & TypeB)
    TypeA ------->>>>> Login and signup screen Inputs
    TypeB ------->>>>> All other screens Input [@Lipton_Zuma]

*/
import React  from "react";
import { View, Text, TextInput, StyleSheet, ProgressViewIOSComponent } from "react-native";
import Colors from "../colors";


const TypeAInput = ({label, iconName}) => {
    return(
        <View style={{marginTop: 90}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.light, marginVertical: 10}}>
                {label}
            </Text>
            <View>
                
                <TextInput style={styles.inputContainer}></TextInput>
            </View>
        </View>
    );
} 


const TypeBInput = () =>{
    return(
        <View>
            <Text>
                TypeB Input
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#F1F1F1', 
        height: 55, 
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 15
    }
})


export default TypeAInput;