import React , { useEffect ,useState} from 'react';
import { View,StyleSheet } from 'react-native';
import RegisterScreen from './Screen/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginView from './Screen/LoginView';
import SplashScreen from './Screen/Splashscreen';
import Home from './Screen/Home';
import Mood from './Screen/Mood';
import Profile from './Screen/Profile';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth'; // Import getAuth
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App =() =>{
  const [User, setUser] = useState(User || null);
  useEffect(()=>{
    const auth = getAuth(); // Initialize auth
    onAuthStateChanged(auth, async(user) => { // Use auth
      if (user) {
        console.log(JSON.stringify(user, null, 2));
        setUser(user.email);
        await AsyncStorage.setItem("useraccount", user.email);
      } else {
        console.log("no user");
        setUser(null);
      }
    });
  },[])
  

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown : false}}>
        <Stack.Screen name="Splashscreen" component={SplashScreen}/>
        <Stack.Screen name="LoginView" component={LoginView}/>
        <Stack.Screen name= "RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name= "Home" component={Home}/>
        <Stack.Screen name= "Mood" component={Mood}/>
        <Stack.Screen name= "Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
