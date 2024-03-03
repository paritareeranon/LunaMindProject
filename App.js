import React from 'react';
import { View,StyleSheet } from 'react-native';
import RegisterScreen from './Screen/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginView from './Screen/LoginView';
import SplashScreen from './Screen/Splashscreen';
import Home from './Screen/Home';
import Mood from './Screen/Mood';
import CalendarMood from './Screen/CalendarMood';
import LastPeriod from './Screen/LastPeriod';
import TypicalCycle from './Screen/TypicalCycle';
import PeriodUsuallyLast from './Screen/PeriodUsuallyLast';
import PeriodScreen from './Screen/PeriodScreen';

const Stack = createNativeStackNavigator();

const App =() =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown : false}}>
      <Stack.Screen name="Splashscreen" component={SplashScreen}/>
      <Stack.Screen name="LoginView" component={LoginView}/>
      <Stack.Screen name= "RegisterScreen" component={RegisterScreen}/>
      <Stack.Screen name= "Home" component={Home}/>
      <Stack.Screen name= "Mood" component={Mood}/>
      <Stack.Screen name= "CalendarMood" component={CalendarMood}/>
      <Stack.Screen name= "LastPeriod" component={LastPeriod}/>
      <Stack.Screen name= "TypicalCycle" component={TypicalCycle}/>
      <Stack.Screen name= "PeriodUsuallyLast" component={PeriodUsuallyLast}/>
      <Stack.Screen name= "PeriodScreen" component={PeriodScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;