import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Colors from "../colors";
import Topic from "../components/topic";

const ItemDetails = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Topic title={'Item Details'}></Topic>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ItemDetails;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
    }
})