import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground, Linking } from "react-native";
import Colors from "../utils/colors";
import Topic from "../components/topic";

const ItemDetails = () => {

    const uri = require('../../assets/images/book.jpeg')

    const data = [
        {
          title:"Slightly worn pair of German made Sneakers",
          location:"South Side NMU",
          quantity:2,
          id:"123",
          image:require("../../assets/images/cardImage.jpg")
        },
        {
          title:"Slightly worn pair of German made Sneakers",
          location:"South Side NMU",
          quantity:2,
          id:"123;lsl",
          image:require("../../assets/images/cardImage.jpg")
        },
        {
          title:"Slightly worn pair of German made Sneakers",
          location:"South Side NMU",
          quantity:2,
          id:"123oao",
          image:require("../../assets/images/cardImage.jpg")
        },
        {
          title:"Slightly worn pair of German made Sneakers",
          location:"South Side NMU",
          quantity:2,
          id:"123poi",
          image:require("../../assets/images/cardImage.jpg")
        },
        {
          title:"Slightly worn pair of German made Sneakers",
          location:"South Side NMU",
          quantity:2,
          id:"123wiua",
          image:require("../../assets/images/cardImage.jpg")
        },
      ]
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Topic title={'Item Details'}></Topic>
                <View style={styles.content}>
                    <ImageBackground source={uri} style={styles.image}></ImageBackground>
                </View>

                <View style={{marginBottom: 60}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', lineHeight: 30, marginBottom: 40, color: Colors.dark}}> 
                        Quantum Physics By Wiley Second Edition
                    </Text>

                    <Text style={styles.details}>By:   
                        <Text style={{color: Colors.primary}}>                Mireku Prince</Text>
                    </Text>
                    <Text style={styles.details}>Quantity:     3</Text>
                    <Text style={styles.details}>Location:    South Side NMU</Text>
                    <Text style={styles.details}>Email:         <Text style={styles.email}
                        onPress={() => Linking.openURL('mailto:devfreak235@gmail.com?subject=Interested&body=...blah blah')}
                        >devfreak235@gmail.com</Text>
                    </Text>
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
        fontSize: 17,
        fontWeight: '400',
        marginVertical: 5,
    },
    email: {
        color: Colors.primary,
        textDecorationLine: 'underline'
    }
})