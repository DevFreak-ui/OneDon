import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native"
import CustomBtn1 from "../../components/customButton"
import Topic from "../../components/topic"
import TypeAInput from "../../components/customInput"


export default class ChangePass extends Component {
    constructor(props)
    {
        super(props)
    }

    render(){
        return(
            <SafeAreaView style={styles.authcontainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Topic></Topic>
                    <Text style={styles.header}>Change Password</Text>
                    <View style={{marginVertical:Platform =='ios'? 60 : 70}}>
                        <TypeAInput label='New Password' iconName='lock-outline'></TypeAInput>
                        <TypeAInput label='Confirm' iconName='lock-outline'></TypeAInput>
                    </View>
                    <CustomBtn1 title='Continue' onPress={()=>alert("Under Construction")} style={styles.btn} />
                    
                </ScrollView>
                <Text onPress={() => this.props.navigation.navigate('home1')} style={styles.skip}>Skip &gt;&gt; </Text>
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
    },
    skip: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black',
        alignSelf: 'flex-end',
        right: 10,
        bottom: 150
    }
})