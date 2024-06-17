import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen.js';
import Login from './screens/Login.js'
import SignUp from './screens/SignUp.js';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      {<Stack.Screen options={{headerShown:false}} name ="start" component={StartScreen}/>}
      {<Stack.Screen options={{headerShown:false}} name ="login" component={Login}/>}
      {<Stack.Screen options={{headerShown:false}} name ="signup" component={SignUp}/>}

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
