import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Article from './Article';
import PeriodScreen from './PeriodScreen';
import Home from './Home';
import CalendarMood from './CalendarMood';
import Report from './Report';
import LastPeriod from './LastPeriod';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationBar = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: '#3F3C3C',
            tabBarActiveTintColor: 'black',
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
                        <Icon name="home" size={29} color={color} />
                    ),
                }} />
            <Tab.Screen name="CalendarMood" component={CalendarMood}
                options={{
                    tabBarLabel: ({ focused }) => null,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar" size={25} color={color} />
                    ),
                }} />
        </Tab.Navigator>

    )
}

export default NavigationBar