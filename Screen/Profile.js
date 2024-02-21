import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = ({ navigation }) => {
  const handleGoBack = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to go back to the login screen?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('LoginView'), // navigate back to login screen
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      source={require('../img/ProfileScreen.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.profileImage}>
          <Image
            source={require("../img/chitanda.gif")}
            style={styles.image}
            resizeMode='cover'
          />
        </View>
        <View style={styles.name}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>@parii</Text>
        </View>

        <View style={styles.profilecard}>
          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 28 }]}>Name</Text>

            <Text style={[styles.text, { fontWeight: "200", fontSize: 24 }]}>Parita Reeranon</Text>
          </View>
        
          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 28 }]}>E-mail</Text>

            <Text style={[styles.text, { fontWeight: "200", fontSize: 24 }]}>parita.re@ku.th</Text>
          </View>
         
          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 28 }]}>Weight/Height</Text>

            <Text style={[styles.text, { fontWeight: "200", fontSize: 24 }]}>50/160</Text>

          </View>
          
          <LinearGradient colors={['#FDB5CD', '#D2D5F8']} style={styles.button}>
            <TouchableOpacity onPress={''}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <LinearGradient colors={['#FDB5CD', '#D2D5F8']} style={styles.button}>
            <TouchableOpacity onPress={handleGoBack}>
              <Text style={styles.buttonText}>Go Back to Login</Text>
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
  profilecard: {
    backgroundColor: 'white',
    width: 300,
    height: 400,
    borderRadius: 30
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    borderColor: 'white',
    borderWidth: 6
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  name: {
    marginBottom: 20,
  },
  information: {
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  text: {
    marginTop: 10,
    alignSelf: 'center'
  },
  button: {
    width: '80%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 35,
    marginTop: 5,
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
});

export default Profile;
