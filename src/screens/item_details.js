import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import Colors from "../colors";
import Topic from "../components/topic";

const ItemDetails = () => {

    const uri = require('../../assets/images/book.jpeg')

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Topic title={'Item Details'}></Topic>
                <View style={styles.content}>
                    <ImageBackground source={uri} style={styles.image}></ImageBackground>
                </View>

                <View style={{marginBottom: 60}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', lineHeight: 30, marginBottom: 30, color: Colors.dark}}> 
                        Quantum Physics By Wiley Second Edition
                    </Text>

                    <Text style={styles.details}>By:   
                        <Text style={{color: Colors.primary}}>                Mireku Prince</Text>
                    </Text>
                    <Text style={styles.details}>Quantity:     3</Text>
                    <Text style={styles.details}>Location:    South Side NMU</Text>
                    <Text style={styles.details}>Email:         devfreak235@gmail.com</Text>
                </View>

                <View>
                    <Text  style={{fontWeight: 'bold', fontSize: 19, color: Colors.dark, marginVertical: 10}}> 
                        Similar Posts
                    </Text>

                    {/*
                    
                        ... card component goes here
                    
                    */}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ItemDetails;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
    },
    content: {
        flex: 1,
        height: 200,
        borderRadius: 20,
        overflow: 'hidden', 
        marginBottom: 10
    },
    image: {
        flex: 1,
    },
    details: {
        fontSize: 17.5,
        fontWeight: '400',
        marginVertical: 3,
    }
})