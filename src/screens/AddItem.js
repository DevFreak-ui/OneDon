import React, { useState, useEffect, Component } from 'react'
import { SafeAreaView, 
    View, 
    Text, 
    ScrollView, 
    StyleSheet, 
    Button, 
    Image,
    Pressable 
} from 'react-native'
import CustomBtn1 from '../components/customButton'
import { TypeBInput } from '../components/customInput'
import { Feather } from '@expo/vector-icons'
import Topic from '../components/topic'
import * as ImagePicker from 'expo-image-picker';
import Category from '../components/categorySelector'
import { createNavigatorFactory } from '@react-navigation/native'


export default class AddItem extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            image: null,
            title: '',
            category: 'general',
            location: '',
            quantity: 1
        }
    }

    pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            this.setState({ image: result});
        }
    };

    // INSERT FUNCTION
    InsertFunc = () => {

        var title = this.state.title
        var category = this.state.category
        var location = this.state.location
        var quantity = this.state.quantity
        var imgUrl = this.state.image.uri
        var user_id = 2

        var InsertUrl = "http://onedon.atwebpages.com/api/addItem.php"
        var headers = {
            'Accept': 'aplication/json',
            'Content-Type': 'application.json'
        }
        var data = {
            title: title,
            category: category,
            location: location,
            quantity: quantity,
            imgUrl: imgUrl,
            user_id: user_id
        }
        console.log(data);
        fetch (
            InsertUrl,
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data)
            }
        )
        .then((response) => response.json())
        .then((response) => {
            if (response[0].message != 'success') {
                alert(response[0].message);
            }else {
                alert('Saved!');
                this.props.navigation.navigate('home');
            }
        })
        .catch((error) => {
            alert('Error: ' + error);
        })

    }

    render()
    {
        let { image } = this.state
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Topic title={'Add Item'} />

                    <Pressable style={styles.imgContainer} onPress={this.pickImage}>
                        <Feather name='plus' size={16} />
                        <Text>Choose Image</Text>
                    </Pressable>
                    {image && <Image source={{ uri: image.uri }} style={styles.selected} />}

                    <TypeBInput 
                        label='Item Description' 
                        height={50}
                        onChangeText={(title)=>this.setState({title})}
                    />
                    
                    {/* Category Selector starts */}
                    <Category 

                    />
                    

                    {/* Category Selector ends */}
                    <TypeBInput 
                        label='Location'
                        height={50}
                        onChangeText={(location)=>this.setState({location})}
                    />
                    <TypeBInput 
                        label='Quantity' 
                        height={50} 
                        keyboardType={'numeric'}
                        onChangeText={(quantity)=>this.setState({quantity})}
                    />

                    <CustomBtn1 title='Donate' onPress={this.InsertFunc} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 30
    },
    imgContainer: {
        height: 100,
        backgroundColor: '#d6d6d6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    selected: {
        width: 150,
        height: 150,
        borderRadius: 10,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 8
    }
})