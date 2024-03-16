import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PeriodScreen from './PeriodScreen';
import Home from './Home';
import CalendarMood from './CalendarMood';
import LastPeriod from './LastPeriod';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationBar = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: 'black',
            tabBarActiveTintColor: '#FF80B5',
        }}>
            {/* <Tab.Screen name="LastPeriod" component={LastPeriod}
                options={{
                    tabBarLabel: ({ focused }) => null,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart-o" size={23} color={color} />
                    ),
                }} /> */}
                <Tab.Screen name="PeriodScreen" component={PeriodScreen}
                options={{
                    tabBarLabel: ({ focused }) => null,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart-o" size={23} color={color} />
                    ),
                }} />
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: ({ focused }) => null,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={24} color= {color} />
                    ),
                }} />
            <Tab.Screen name="CalendarMood" component={CalendarMood}
                options={{
                    tabBarLabel: ({ focused }) => null,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="calendar" size={24} color= {color} />
                    ),
                }} />
        </Tab.Navigator>

    )
}

export default NavigationBar