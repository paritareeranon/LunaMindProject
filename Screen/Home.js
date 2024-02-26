import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const Home = () => {

  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>
            Hello Welcome to Home Screen
        </Text>
          <Button
        title="MoodScreen"
        color="red"
        onPress={() => navigation.navigate("Mood")}
      />
      <Text>
            Hello Welcome to Home Screen
        </Text>
          <Button
        title="Profile"
        color="red"
        onPress={() => navigation.navigate("Profile")}
      />
      </View>
      
    );
  }

  const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE1F1',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
      },
  })
export default Home;