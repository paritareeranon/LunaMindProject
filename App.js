import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterScreen from './Screen/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginView from './Screen/LoginView';
import SplashScreen from './Screen/Splashscreen';
import NavigationBar from './Screen/NavigationBar';
import SubArticle1 from './SubArticle/SubArticle1';
import SubArticle2 from './SubArticle/SubArticle2';
import SubArticle3 from './SubArticle/SubArticle3';
import SubArticle4 from './SubArticle/SubArticle4';
import SubArticle5 from './SubArticle/SubArticle5';
import SubArticle6 from './SubArticle/SubArticle6';
import SubArticle7 from './SubArticle/SubArticle7';
import SubArticle8 from './SubArticle/SubArticle8';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splashscreen" component={SplashScreen} />
        <Stack.Screen name="LoginView" component={LoginView} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
        <Stack.Screen name="NavigationBar" component={NavigationBar} />
        <Stack.Screen name="SubArticle1" component={SubArticle1}/>
        <Stack.Screen name="SubArticle2" component={SubArticle2}/>
        <Stack.Screen name="SubArticle3" component={SubArticle3}/>
        <Stack.Screen name="SubArticle4" component={SubArticle4}/>
        <Stack.Screen name="SubArticle5" component={SubArticle5}/>
        <Stack.Screen name="SubArticle6" component={SubArticle6}/>
        <Stack.Screen name="SubArticle7" component={SubArticle7}/>
        <Stack.Screen name="SubArticle8" component={SubArticle8}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;