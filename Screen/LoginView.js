import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { auth } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';  



const LoginView = () => {
  const navigation = useNavigation(); // Add this line to get the navigation object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const handleSignIn = async (email,password) => {
  //   try {
  //     // Validate email and password here if needed

  //     // Sign in with Firebase
  //     await signInWithEmailAndPassword(auth, email, password);

  //     // If successful, navigate to the Home screen or any other screen
  //     navigation.navigate("Home");
  //   } catch (error) {
  //     // Handle login errors
  //     console.error("Login Error:", error.message);
  //     // Set appropriate error messages for email and password if needed
  //     setEmailError("Invalid email or password");
  //     setPasswordError("Invalid email or password");
  //   }
  // };

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
          <TouchableOpacity onPress={'handleSignIn'}>
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
    color: '#5CA3FF'
  },
  notMemberText: {
    marginTop: 64,
    alignSelf: 'center',
  },
  errorMessage: {
    fontSize: 10,
    color: 'red',
    width: '80%',
    marginTop: 5,
  },
});

export default LoginView;
