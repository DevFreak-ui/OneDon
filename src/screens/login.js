import { StatusBar } from 'expo-status-bar';
import react from 'react';
import {View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import Colors from '../colors';
import TypeAInput from '../components/customInput';


const Login = () =>{
    return(
        <SafeAreaView style={styles.authcontainer}>
            <StatusBar style="auto" />
            <Text style={styles.smheader}> Welcome to </Text>
            <View style={{alignItems: 'center',}}>
                <Text style={styles.bgheader}>One 
                    <View style={{backgroundColor: Colors.primary,
                                paddingHorizontal: 10,
                                marginHorizontal: 10,
                                borderRadius: 10}}><Text style={[styles.bgheader, {color: '#f2f2f2'}]}>Donation</Text>
                    </View>
                </Text>
            </View>
            
            <View>
                <TypeAInput label={'Email'}></TypeAInput>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    authcontainer:{
        flex: 1,
        justifyContent: 'center',
        paddingTop: 50,
        paddingHorizontal: 30
    },
    smheader: {
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    bgheader: {
        fontSize:  40,
        fontWeight: 'bold',
        maxHeight: 50,
    }
})

export default Login