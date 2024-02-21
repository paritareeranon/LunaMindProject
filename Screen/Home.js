import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';



const Home = () => {
    return (
      <View style={styles.container}>
        <Text>
            Hello Welcome to Home Screen
        </Text>
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