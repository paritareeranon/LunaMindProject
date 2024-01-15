import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';


const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
      // Implement your registration logic here
      // For simplicity, we'll just log the entered email and password
      console.log('Username:', username);
      console.log('Firstname:', firstname);
      console.log('Surname:', surname);
      console.log('Email:', email);
      console.log('Password:', password);
  
      // After successful registration, you can navigate to another screen
      // For example, navigate to a Home screen
      navigation.navigate('Home');
    };
  
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./img/Login Screen.png')} style={styles.image}>
        <Text style={styles.header}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Firstname"
          
          onChangeText={(text) => setFirstname(text)}
        />
          <TextInput
          style={styles.input}
          placeholder="Surname"
          onChangeText={(text) => setSurname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
           <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <LinearGradient colors={['#FDB5CD','#D2D5F8']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          Sign in 
        </Text>
        </LinearGradient>
      </ImageBackground>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      Imagebackground :'white'
    },
    header: {
      fontSize: 30,
      marginBottom: 20,
      fontWeight:'bold',
      fontFamily:''
    },
    input: {
      width: '80%',
      height: 40,
      // borderColor: 'gray',
      // borderWidth: 1,
      borderRadius: 8,
      marginBottom: 20,
      paddingHorizontal: 10,
      backgroundColor:'white',
    },
    linearGradient: {
      // flex: 1,
      width:"80%",
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 35 ,
      // borderColor: 'gray'
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });
  
  export default RegisterScreen;