import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const LoginView = () => {
  const navigation = useNavigation(); // Add this line to get the navigation object

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    if (email === '0000' && password === '0000') {
      console.log('Signed in successfully!');
      setErrorMessage('');
      navigation.navigate("Home");
    } else {
      console.log('Invalid email or password');
      setErrorMessage('Username or password you entered is incorrect. try again!');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <ImageBackground
      source={require('../img/Screen.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../img/logo1.png')}
          style={styles.logo}
        />

        <Text style={styles.header}>
          Welcome to LunaMind
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        /> 
        {errorMessage ? (
          <Text style={[styles.errorMessage]}>
            {errorMessage}
          </Text>
        ) : null}

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        {errorMessage ? (
          <Text style={[styles.errorMessage]}>
            {errorMessage}
          </Text>
        ) : null}

        <LinearGradient colors={['#FDB5CD', '#D2D5F8']} style={styles.button}>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.buttonText}>
              Sign in
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <Text style={styles.continueText}>
          Or continue with
        </Text>

        <Image
          style={{
            alignSelf: 'center',
          }}
          source={require('../img/logo_google.png')}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.registerText}> Not a member? Register now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  header: {
    fontSize: 15,
    marginBottom: 40,
    alignSelf: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 120 ,
    alignSelf: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 15,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  button: {
    width: '80%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 35,
    marginTop: 35,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  continueText: {
    marginTop: 64,
    marginBottom: 30,
    alignSelf: 'center',
  },
  registerText: {
    marginTop: 64,
    alignSelf: 'center',
    color: '#5CA3FF',
  },
  errorMessage: {
    fontSize: 10,
    color: 'red',
    width: '80%',
    marginTop: 5,
  },
});

export default LoginView;
