import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function LoginView() {
  // const navigation = useNavigation(); // Add this line to get the navigation object

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Signing in with:', email, password);

    setEmail('');
    setPassword('');
  };

  return (
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

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

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

      <Image style={{
        alignSelf:'center',
      }}
        source={require('../img/logo_google.png')}
      
      />

      {/* <Text style={styles.registerText}>
        Not a member? Register now
      </Text> */}
      
        <TouchableOpacity
          onPress={()=> ("RegisterScreen") }>
            <Text style={styles.registerText}> Not a member? Register now</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE1F1',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  header: {
    fontSize: 15,
    marginBottom: 40,
    alignSelf:'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
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
    
  },
  continueText: {
    marginTop: 64,
    marginBottom: 30,
    alignSelf:'center',
    
  },
  registerText: {
    marginTop: 64,
    alignSelf:'center',

  },
});
