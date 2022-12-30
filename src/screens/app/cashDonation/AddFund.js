import React, { Component} from "react"
import { 
    View, 
    Text, 
    ScrollView, 
    SafeAreaView, 
    StyleSheet ,
    Pressable,
    Image
} from "react-native"
import Topic from "../../../components/topic"
import { Feather } from "@expo/vector-icons"
import { TypeBInput } from "../../../components/customInput"
import CustomBtn1 from "../../../components/customButton"
import { CategoryB } from "../../../components/categorySelector"

export default class AddFund extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            amount: 0,
            image: '',
            title: '',
            category: '',
            description: '',
        }
    }

    
    render() {

        let { image } = this.state.image

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Topic title={'Add Fundraising'} />

                    <Pressable style={styles.imgContainer} onPress={this.pickImage}>
                        <Feather name='plus' size={16} />
                        <Text>Choose Image</Text>
                    </Pressable>
                    {image && <Image source={{ uri: image.uri }} style={styles.selected} />}

                    <TypeBInput 
                        label='Title' 
                        height={50}
                        onChangeText={(title)=>this.setState({title})}
                    />
                    
                    <CategoryB />

                    <TypeBInput 
                        label='Brief Description'
                        multiline
                        numberOfLines={6}
                        onChangeText={(description)=>this.setState({description})}
                    />

                    <TypeBInput 
                        label='Amount' 
                        height={50} 
                        keyboardType={'numeric'}
                        onChangeText={(quantamountity)=>this.setState({amount})}
                    />

                    <CustomBtn1 title='Post' onPress={() => alert("something")} />
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