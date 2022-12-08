import React, { useState, useEffect } from 'react'
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


const AddItem = () => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Topic title={'Add Item'} />

                <Pressable style={styles.imgContainer} onPress={pickImage}>
                    <Feather name='plus' size={16} />
                    <Text>Choose Image</Text>
                </Pressable>
                {image && <Image source={{ uri: image }} style={styles.selected} />}

                <TypeBInput 
                    label='Item Description' 
                    multiline
                    numberOfLines={6}
                />
                
                {/* Category Selector starts */}
                <Category />
                

                {/* Category Selector ends */}
                <TypeBInput label='Location' iconName='' height={50}/>
                <TypeBInput label='Quantity' iconName='' height={50} keyboardType={'numeric'}/>

                <CustomBtn1 title='Donate' onPress={() => alert('Confirm')} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddItem

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