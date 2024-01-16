import React from 'react';
import { View,StyleSheet } from 'react-native';
import RegisterScreen from './Screen/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginView from './Screen/LoginView';

const Stack = createNativeStackNavigator();

const App =() =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown : false}}>
      <Stack.Screen name="LoginView" component={LoginView}/>
      <Stack.Screen name= "RegisterScreen" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;