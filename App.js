// import React from 'react';
// import { View,StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import LoginView from './Screen/LoginView';
// import RegisterScreen from './Screen/RegisterScreen';
// import { createAppContainer } from "react-navigation";
// import{createStackNavigator} from "react-navigation-stack";

// const App = createStackNavigator(
//   {
//     LoginView : {
//       screen: LoginView
//     },
//     RegisterScreen : {
//       screen: RegisterScreen
//     },

// },
//   {
//     intialRouteName: "Login",
//     defaultNavigationOptions:{
//       title: "picka"
//     }
//   }
// );
// export default createAppContainer(App);

import React from 'react';
import { View,StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './Screen/LoginView';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
})