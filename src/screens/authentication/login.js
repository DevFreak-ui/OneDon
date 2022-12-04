import { StatusBar } from 'expo-status-bar';
import react from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';
import TypeAInput from '../../components/customInput';
import CustomBtn1 from '../../components/customButton';


const Login = ({navigation}) =>{

    const onPressAction = () => alert('Disabled feature')

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
                    <Text style={styles.fPass} onPress={() => navigation.navigate('forgotPass')}>Forgot Password?</Text>
                </View>

                <CustomBtn1 title={'Login'} style={{flex: 1}} onPress={() => navigation.navigate('home')}></CustomBtn1>
                <Text style={{fontSize: 17, textAlign: 'center'}}>First time only password: 123456 
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
    },
    fPass: {
        color: Colors.primary, 
        alignSelf: 'flex-end', 
        fontSize: 16,
        marginBottom: 50
    }
})

export default Login