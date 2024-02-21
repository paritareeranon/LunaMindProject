import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleRegister = (email,password) => {
  //   try {
  //     createUserWithEmailAndPassword(auth, email, password);
  //     console.log("User account created & signed in!");
  //   } catch (e) {
  //     if (e.code === "auth/email-already-in-use") {
  //       console.log("That email address is already in use!");
  //     } else if (e.code === "auth/invalid-email") {
  //       console.log("That email address is invalid!");
  //     } else {
  //       console.error("CreateUserError: " + e.message);
  //     }
  //   }
  // };

  return (
    <ImageBackground
      source={require('../img/Screen.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Register</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Username"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <LinearGradient colors={['#FDB5CD', '#D2D5F8']} style={styles.button}>
          <TouchableOpacity onPress={'handleRegister'}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.continueText}>Or continue with</Text>
        <Image
          style={{
            alignSelf: 'center',
          }}
          source={require('../img/logo_google.png')}
        />
      </View>
    </ImageBackground>
  );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    marginTop:50 ,
    padding: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#3F3C3C' ,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor:'transparent'
  },
  button: {
    width: '80%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 35,
    marginTop: 13,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  continueText: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    color: '#3F3C3C' ,
  },
});

export default RegisterScreen;