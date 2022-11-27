/*
    There are types of input fields for this projet (say TypeA & TypeB)
    TypeA ------->>>>> Login and signup screen Inputs
    TypeB ------->>>>> All other screens Input [@Lipton_Zuma]

*/
import React  from "react";
import { View, Text, TextInput, StyleSheet, ProgressViewIOSComponent } from "react-native";
import Colors from "../utils/colors";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';


const TypeAInput = ({label, iconName, password}) => {

    const [hidePassword, setHidePassword] = React.useState(password);

    return(
        <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.light, marginVertical: 10}}>
                {label}
            </Text>
            <View style={styles.inputContainer}>
                <Icon name={iconName} size={15}/>
                <TextInput 
                    secureTextEntry={hidePassword}
                    style={styles.inputContent}
                    autoCorrect={false}
                    ></TextInput>
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
        backgroundColor: Colors.inputA, 
        height: 50, 
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    inputContent: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        paddingHorizontal: 15
    }
})


export default TypeAInput;