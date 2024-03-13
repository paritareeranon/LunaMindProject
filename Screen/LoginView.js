import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { UserAuth } from '../api/Authentication';

const LoginView = () => {
  const navigation = useNavigation(); // Add this line to get the navigation object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const handleSignIn = () => {
  //   if (email === '0000' && password === '0000') {
  //     console.log('Signed in successfully!');
  //     setErrorMessage('');
  //     navigation.navigate("Home");
  //   } else {
  //     console.log('Invalid email or password');
  //     setErrorMessage('Username or password you entered is incorrect. try again!');
  //   }

  //   setEmail('');
  //   setPassword('');
  // };
  
  const handleSignIn = async (user, pass) => {
    try {
      const check = await UserAuth(email,password);
      // console.log(check.message);
      if (check.status === false) {
        if (check.message === "auth/invalid-email") {
        } else if (check.message === "auth/missing-password") {
        } else if (check.message === "auth/invalid-credential") {
        }
      } else {
        // console.log("User sign in successful");
        navigation.navigate("Home");
      }
    } catch (err) {
      console.error("SignIn failed", err.message);
    }
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

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.notMemberText}> Not a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
            <View>
              <Text style={styles.registerText}>
                Register now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
    color: '#3F3C3C'
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 120,
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
    color: '#3F3C3C'
  },
  registerText: {
    marginTop: 64,
    alignSelf: 'center',
    color: '#5CA3FF'
  },
  notMemberText: {
    marginTop: 64,
    alignSelf: 'center',
    color: '#3F3C3C'
  },
  errorMessage: {
    fontSize: 10,
    color: 'red',
    width: '80%',
    marginTop: 5,
  },
});

export default LoginView;
