import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { CreateUser } from '../api/Authentication';
import { firestore } from "../firebaseConfig";
import { addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateCurrentUser } from 'firebase/auth';

const RegisterScreen = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstnameBorderColor, setFirstnameBorderColor] = useState('transparent');
  const [surnameBorderColor, setSurnameBorderColor] = useState('transparent');
  const [emailBorderColor, setEmailBorderColor] = useState('transparent');
  const [passwordBorderColor, setPasswordBorderColor] = useState('transparent');

  const handleRegister = async () => {
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailFormat)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      setEmailBorderColor('red');
      return;
    }
    const lowercaseEmail = email.toLowerCase();

    CreateUser(lowercaseEmail, password, firstname, surname, navigation);
    setFirstnameBorderColor(firstname.trim() === '' ? 'red' : 'transparent');
    setSurnameBorderColor(surname.trim() === '' ? 'red' : 'transparent');
    setEmailBorderColor(email.trim() === '' ? 'red' : 'transparent');
    setPasswordBorderColor(password.trim() === '' ? 'red' : 'transparent');
  };

  return (
    <ImageBackground
      source={require('../img/Screen.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Register</Text>
        <TextInput
          style={[styles.input, { borderColor: firstnameBorderColor }]}
          placeholder="Firstname"

          onChangeText={(text) => setFirstname(text)}
        />
        <TextInput
          style={[styles.input, { borderColor: surnameBorderColor }]}
          placeholder="Surname"

          onChangeText={(text) => setSurname(text)}
        />
        <TextInput
          style={[styles.input, { borderColor: emailBorderColor }]}
          placeholder="Email"

          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={[styles.input, { borderColor: passwordBorderColor }]}
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
    padding: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#3F3C3C',
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
    color: '#3F3C3C',
  },
});

export default RegisterScreen;
