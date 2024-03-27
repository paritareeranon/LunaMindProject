import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterScreen from './Screen/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginView from './Screen/LoginView';
import SplashScreen from './Screen/Splashscreen';
import Home from './Screen/Home';
import Mood from './Screen/Mood';
import CalendarMood from './Screen/CalendarMood';
import LastPeriod from './Screen/LastPeriod';
import TypicalCycle from './Screen/TypicalCycle';
import PeriodUsuallyLast from './Screen/PeriodUsuallyLast';
import PeriodScreen from './Screen/PeriodScreen';
import Profile from './Screen/Profile';
import EditUser from './Screen/EditUser';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth'; // Import getAuth
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationBar from './Screen/NavigationBar';
import SubArticle1 from './SubArticle/SubArticle1';
import SubArticle2 from './SubArticle/SubArticle2';
import SubArticle3 from './SubArticle/SubArticle3';
import SubArticle4 from './SubArticle/SubArticle4';
import SubArticle5 from './SubArticle/SubArticle5';
import SubArticle6 from './SubArticle/SubArticle6';
import SubArticle7 from './SubArticle/SubArticle7';
import SubArticle8 from './SubArticle/SubArticle8';
import Article from './Screen/Article';
import Report from './Screen/Report';
import Welcome from './Screen/Welcome';
import AddPeriod from './Screen/AddPeriod';

const Stack = createNativeStackNavigator();

const App = () => {
  const [User, setUser] = useState(User || null);

  useEffect(() => {
    const auth = getAuth(); // Initialize auth
    onAuthStateChanged(auth, async (user) => { // Use auth
      if (user) {
        console.log(JSON.stringify(user, null, 2));
        setUser(user.email);
        await AsyncStorage.setItem("useraccount", user.email);
      } else {
        console.log("no user");
        setUser(null);
      }
    });
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splashscreen" component={SplashScreen} />
        <Stack.Screen name="LoginView" component={LoginView} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mood" component={Mood} />
        <Stack.Screen name="CalendarMood" component={CalendarMood} />
        <Stack.Screen name="LastPeriod" component={LastPeriod} />
        <Stack.Screen name="TypicalCycle" component={TypicalCycle} />
        <Stack.Screen name="PeriodUsuallyLast" component={PeriodUsuallyLast} />
        <Stack.Screen name="PeriodScreen" component={PeriodScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditUser" component={EditUser} />
        <Stack.Screen name="NavigationBar" component={NavigationBar} />
        <Stack.Screen name="SubArticle1" component={SubArticle1}/>
        <Stack.Screen name="SubArticle2" component={SubArticle2}/>
        <Stack.Screen name="SubArticle3" component={SubArticle3}/>
        <Stack.Screen name="SubArticle4" component={SubArticle4}/>
        <Stack.Screen name="SubArticle5" component={SubArticle5}/>
        <Stack.Screen name="SubArticle6" component={SubArticle6}/>
        <Stack.Screen name="SubArticle7" component={SubArticle7}/>
        <Stack.Screen name="SubArticle8" component={SubArticle8}/>
        <Stack.Screen name="Article" component={Article}/>
        <Stack.Screen name="Report" component={Report}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="AddPeriod" component={AddPeriod}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
