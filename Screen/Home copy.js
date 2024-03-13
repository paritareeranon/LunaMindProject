import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
function FristScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Frist Screen </Text>
    </View>
  );
}

function SecondScreen({ navigation }) {
  navigation.setOptions({ headerShown: false });
  return (
    <ImageBackground
      source={require('../img/Screen.png')}
      style={styles.background}>

      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <Icon name="user-circle" size={40} color="gray"
            style={styles.iconContainer} />

          <Text style={styles.textContainer}> Hi, Parii </Text>

          <View style={styles.card}>
            <Text style={styles.title}> How are you </Text>
            <Text style={styles.title}> Today ? </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.article}> Article </Text>
            <Text style={styles.viewall}> View All </Text>
          </View>

          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollviewArticle}>
            <View style={styles.slider} />
            <View style={styles.slider} />
            <View style={styles.slider} />
            <View style={styles.slider} />

          </ScrollView>

          <Text style={styles.report}> Report </Text>
          <View style={styles.reportcard}>

          </View>
          {/* <StatusBar style="auto" /> */}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

function ThirdScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Third Screen </Text>
    </View>
  );
}

const Home = () => {
  return (
    <NavigationContainer independent={true}>

      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Frist') {
            iconName = focused ? 'heart-o' : 'heart-o';
          } else if (route.name === 'Second') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Third') {
            iconName = focused ? 'calendar' : 'calendar';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabel: '',
      })}
        tabBarStyle={{
            backgroundColor: 'white',
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Frist" component={FristScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
        <Tab.Screen name="Third" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  textContainer: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3F3C3C',
    marginTop: '40%',
    textAlign: 'left',
    marginLeft: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  scrollview: {
    flex: 1,
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: '5%',
    marginTop: '6%',
    marginLeft: '5%',
    shadowColor: '##D8D8D8',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 14,
    width: '90%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: 80,
    right: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F3C3C',
    textAlign: 'center',
  },
  article: {
    marginTop: 20,
    marginLeft: 20,
    paddingRight: '55%',
    fontSize: 17,
  },
  viewall: {
    marginTop: 20,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  slider: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: '5%',
    marginRight: '5%',
    marginTop: 20,
    shadowColor: '#D8D8D8',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 14,
    width: 140,
    height: 140,
  },
  scrollviewArticle: {
    flexDirection: 'row',
    padding: 16,
    paddingTop: -30,
  },
  report: {
    marginTop: 10,
    marginLeft: 20,
    paddingRight: '55%',
    fontSize: 17,
  },
  reportcard: {
    backgroundColor: '#FBE1E3',
    borderRadius: 30,
    padding: 20,
    marginTop: 20,
    marginLeft: 20,
    shadowColor: '##D8D8D8',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 14,
    width: 330,
    height: 330,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
export default Home;