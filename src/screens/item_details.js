import React,  { Component } from "react";
import { View,
    Text,
    StyleSheet, 
    SafeAreaView, 
    ScrollView, 
    ImageBackground,
    Linking } from "react-native";
import Colors from "../utils/colors";
import Topic from "../components/topic";
import Card from "./app/home/Card";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default class ItemDetails extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isLoading: true,
            details: [],
            user_id: ''
        }
    }


    componentDidMount = () => {

        var fetchUrl = "http://onedon.atwebpages.com/api/itemDetails.php"
        var data = {
            pid: this.props.route.params.pid
        }

        fetch(
            fetchUrl,
            {
                method: 'POST',
                headers: {
                    'Accept': 'aplication/json',
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify(data)
            }
        )
        .then((response) => response.json())
        .then((responseJson) => {
    
          if (responseJson[0].message != 'success') {
              alert('Invalid Id');
              this.props.navigation.goBack();
          }else{
            this.setState({
              isLoading: false,
              details: responseJson[0].content
            })
          }
          
        })
        .catch((error)=>{
            alert('Error: '+ error);
            this.props.navigation.goBack();
        })

        AsyncStorage.getItem('user_id').then((value) => this.setState({user_id: value}))

    }

    render()
    {
        let { details } = this.state
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Topic title={'Item Details'}></Topic>
                    <View style={styles.content}>
                        <ImageBackground source={{uri: details.image}} style={styles.image}></ImageBackground>
                    </View>

                    <View style={{marginBottom: 60}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', lineHeight: 30, marginBottom: 40, color: Colors.dark}}> 
                            {details.title}
                        </Text>

                        <Text style={styles.details}>By:   
                            <Text style={{color: Colors.primary}}>                {details.name}</Text>
                        </Text>
                        <Text style={styles.details}>Quantity:     {details.quantity}</Text>
                        <Text style={styles.details}>Location:    <Text style={styles.link}
                            onPress={() => alert('map under development')}>{details.location}</Text></Text>
                        <Text style={styles.details}>Email:         <Text style={styles.link}
                            onPress={() => {
                                var mail = details.email
                                Linking.openURL('mailto:' + mail +'?subject=Interested&body=...blah blah')}
                            }
                            >{details.email}</Text>
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
}


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
    link: {
        color: Colors.primary,
        textDecorationLine: 'underline'
    }
})