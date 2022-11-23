import { StatusBar } from 'expo-status-bar';
import react from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import Colors from '../../colors';
import TypeAInput from '../../components/customInput';
import CustomBtn1 from '../../components/customButton';


const Login = () =>{
    return(
        <SafeAreaView  style={styles.authcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar style="auto" />
                <Text style={styles.smheader}> Welcome to </Text>
                <View style={{ marginBottom: 90, flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style={styles.bgheader}>One</Text>
                    <View style={{backgroundColor: Colors.primary,
                                    paddingHorizontal: 15,
                                    paddingVertical: 3,
                                    marginHorizontal: 6,
                                    borderRadius: 10,
                                    alignItems: 'center'}}>
                                    <Text style={[styles.bgheader, {color: '#f2f2f2'}]}>Donation</Text>
                    </View>
                </View>
                
                <View>
                    <TypeAInput label='Email' iconName='email-outline'></TypeAInput>
                    <TypeAInput label='Password' iconName='lock-outline' password></TypeAInput>
                    <Text style={{color: Colors.primary, alignSelf: 'flex-end', fontSize: 16,marginBottom: 50}}>Forgot Password?</Text>
                </View>

                <CustomBtn1 title={'Login'} style={{flex: 1}}></CustomBtn1>
                <Text style={{fontSize: 17, textAlign: 'center'}}>Don't have an account? 
                    <Text style={{color: Colors.primary, marginLeft: 5}}>Sign-Up</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    authcontainer:{
        flex: 1,
        justifyContent: 'center',
        marginTop: 90,
        marginBottom: 20,
        paddingHorizontal: 30
    },
    smheader: {
        fontSize: 25,
        alignSelf: 'center',
        marginBottom: 10,
    },
    bgheader: {
        fontSize:  35,
        fontWeight: 'bold',
        maxHeight: 50
    }
})

export default Login