import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    // For simplicity, we'll just log the entered details
    console.log('Username:', username);
    console.log('Firstname:', firstname);
    console.log('Surname:', surname);
    console.log('Email:', email);
    console.log('Password:', password);

    // After successful registration, you can navigate to another screen
    // For example, navigate to a Home screen
    navigation.navigate('LoginView'); // Assuming 'HomeScreen' is the correct screen name
  };

  
  return (
    <View style={styles.container}>
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
      <LinearGradient colors={['#FDB5CD', '#D2D5F8']} style={styles.button}>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAE1F1',
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
    },
    header: {
      fontSize: 30,
      marginBottom: 20,
      fontWeight:'bold',
      alignSelf:'center',
    },
    input: {
      width: '80%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 8,
      marginBottom: 20,
      paddingHorizontal: 10,
      alignSelf:'center',
    },
    linearGradient: {
      // flex: 1,
      width:"80%",
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 35 ,
      alignSelf:'center',
    },
    button: {
      width: '80%',
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 35,
      marginTop: 35,
      alignSelf:'center',
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
      alignSelf:'center',
    },
  });
  
  export default RegisterScreen;