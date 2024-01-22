import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States for border colors
  const [usernameBorderColor, setUsernameBorderColor] = useState('transparent');
  const [firstnameBorderColor, setFirstnameBorderColor] = useState('transparent');
  const [surnameBorderColor, setSurnameBorderColor] = useState('transparent');
  const [emailBorderColor, setEmailBorderColor] = useState('transparent');
  const [passwordBorderColor, setPasswordBorderColor] = useState('transparent');

  const handleRegister = () => {
    // Set border color states based on input validation
    setUsernameBorderColor(username.trim() === '' ? 'red' : 'transparent');
    setFirstnameBorderColor(firstname.trim() === '' ? 'red' : 'transparent');
    setSurnameBorderColor(surname.trim() === '' ? 'red' : 'transparent');
    setEmailBorderColor(email.trim() === '' ? 'red' : 'transparent');
    setPasswordBorderColor(password.trim() === '' ? 'red' : 'transparent');

    // Check if any field is empty
    if (!username || !firstname || !surname || !email || !password) {
      // Display an alert if any field is empty
    } else {
      // ใส่ logic
      // For simplicity, we'll just log the entered details
      console.log('Username:', username);
      console.log('Firstname:', firstname);
      console.log('Surname:', surname);
      console.log('Email:', email);
      console.log('Password:', password);

      // After successful registration, you can navigate to another screen
      // For example, navigate to a Home screen
      navigation.navigate('LoginView'); // Assuming 'HomeScreen' is the correct screen name
    }
  };

  return (
    <ImageBackground
    source={require('../img/Screen.png')}
    style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput
        style={[styles.input, { borderColor: usernameBorderColor }]}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
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
      <Text style={styles.continueText}>
          Or continue with
        </Text>
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
