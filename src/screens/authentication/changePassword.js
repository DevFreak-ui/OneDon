import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native"
import CustomBtn1 from "../../components/customButton"
import Topic from "../../components/topic"
import TypeAInput from "../../components/customInput"


export default class ChangePass extends Component {
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <SafeAreaView style={styles.authcontainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Topic></Topic>
                    <Text style={styles.header}>Change Password</Text>
                    <View style={{marginVertical:Platform =='ios'? 60 : 70}}>
                        <TypeAInput label='New Password'></TypeAInput>
                        <TypeAInput label='Confirm'></TypeAInput>
                    </View>
                    <CustomBtn1 title='Continue' onPress={()=>alert("OKAY")} style={styles.btn}></CustomBtn1>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    authcontainer: {
        flex: 1,
        paddingHorizontal: 30
    },
    header: {
        fontSize:  30,
        fontWeight: 'bold',
        maxHeight: 50,
        marginTop: 25
    }
})