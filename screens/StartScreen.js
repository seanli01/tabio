import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const { width: deviceWidth } = Dimensions.get('window');

const StartScreen = () => {

    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Tab.io</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>split a bill with the click of a button</Text>

            
  
          </View>
        </View>
      </View>
    
      <View style={styles.bottomTab}>

      <Image style={styles.animation}
      source={require('../assets/animations/home.gif')} />
        
        <View
            style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                width:350,
                marginTop: 350,
                alignSelf: 'center',
                zIndex:10
    
            }}
        />

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
                <Text>login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signup')}>
                <Text>sign up</Text>
            </TouchableOpacity>


        </View>
        
      </View>
      
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomTab:{
    width: deviceWidth,
    height: 580,
    backgroundColor: 'black',
    borderTopLeftRadius:60,
    borderTopRightRadius:60,
    position: 'absolute',
    marginTop: 250
  },

  tab: {
    width: deviceWidth,
    height: 350,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  textContainer: {
    width: '90%', 
    alignItems: 'flex-start', 
    paddingHorizontal: 20, 
    paddingBottom:150
  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10, 
  },
  subtitleContainer: {
    marginTop: 10, 
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
  },
  button:{
    width:132,
    height: 38,
    backgroundColor:'white',
    borderRadius: 20,
    alignItems:'center',
    padding: 10,
    margin: 10

  },
  buttonContainer: {
    padding: 60,
    width:'100%',
    justifyContent:'center',
    alignItems: 'center',
  },
  animation:{
    width:400,
    height:400,
    alignSelf:'center',
    position: 'absolute',
    zIndex: 11
  },

});
