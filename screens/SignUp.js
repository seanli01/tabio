import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, KeyboardAvoidingView, Platform, TextInput} from 'react-native'
import {React, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

const { width: deviceWidth } = Dimensions.get('window');
const { height: deviceHeight } = Dimensions.get('window');

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation =useNavigation();







  return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
        <View style={styles.back}>
            <TouchableOpacity style={styles.backButton} onPress={() => {navigation.goBack()}}>
                <Text style={{color:'black'}}>{"<"}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.image}>
            <Image style={styles.logo} source={require('../assets/signin.png')}/>

        </View>

        <View style={styles.bottomTab}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>create an account</Text>

            </View>

            <View style={styles.inputContainer}>
 
                <TextInput
                placeholder="email..."
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                autoCorrect={false}
                >      
                </TextInput>



                <TextInput
                placeholder="password..."
                value={password}
                onChangeText={text =>setPassword(text) }
                style={styles.input}
                secureTextEntry
                >      
                </TextInput>
                <TextInput
                placeholder="confirm password..."
                value={password}
                onChangeText={text =>setPassword(text) }
                style={styles.input}
                secureTextEntry
                >      
                </TextInput>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>sign up</Text>
            </TouchableOpacity>

            



        </View>
    </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        width: deviceWidth,
        height: deviceHeight,

    },
    back:{
        marginTop:50,
        marginHorizontal: 30
    },
    backButton: {
        width:20,
        height:20,
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        
    },

    bottomTab: {
        width: deviceWidth,
        height: 600,
        backgroundColor: 'white',
        position: "absolute",
        marginTop: 300,
        borderTopLeftRadius: 60,
        borderTopRightRadius:60,
        alignItems:'center'
    },
    logo:{
        width: 408,
        height: 320

    },
    image:{
        zIndex:999,
        alignItems:'center',
        marginLeft: 15
    },
    textContainer: {
        alignItems:'center',
        paddingTop: 90,


    },
    text:{
        color: '#787878',
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:8,
        marginTop:5,
        borderColor: '#828282',
        borderWidth:0.5,
        width: 295,
        height: 48,
        margin:20

    },
    inputContainer: {
        alignItems:'center',
        padding: 15
    },

    button:{
        width: 132,
        height: 38,
        backgroundColor:'black',
        borderRadius: 20,
        alignItems: 'center',
        padding: 10

    },
    buttonText:{
        color:'white'
    },

    t2:{
        paddingTop: 20,
        color: '#787878',
    },
    googleContainer: {
        height: 60,
        width: 60,
        backgroundColor: 'black', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20, 
        borderRadius: 20
      },
    
    google: {
        height: 40,
        width: 40
    },



})