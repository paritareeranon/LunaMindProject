import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firestore } from "../firebaseConfig";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { signedOut } from '../api/Authentication';

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState({ email: "", firstname: "", surname: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = await AsyncStorage.getItem("useraccount");
        if (email) {
          const q = query(collection(firestore, 'UserInfo'), where('email', '==', email));
          const snapshot = await getDocs(q);

          snapshot.forEach(doc => {
            const userData = doc.data();
            const { firstname, surname, email } = userData;
            console.log('Firstname:', firstname);
            console.log('Surname:', surname);
            console.log('Email:', email);
            setUserData(userData);
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const updateUserProfile = async (email, newData) => {
    try {
      const userRef = doc(collection(firestore, 'UserInfo'), email);
      await setDoc(userRef, newData, { merge: true });
      console.log("User profile updated successfully!");
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };


  const Logout = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to go back to the login screen?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => { signedOut(); navigation.navigate("LoginView"); },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <LinearGradient
      colors={['#D2D5F8', '#FDB5CD', '#F5F5F5']}
      locations={[0, 0.5, 0.5]}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.iconleft}>
          <TouchableOpacity onPress={() => navigation.navigate("NavigationBar")}>
          <Icon name="angle-left" size={35}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.profileImage}>
          <Image
            source={require("../img/logo1.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.name}>
          <Text style={[styles.text, { fontWeight: "bold", fontSize: 24, color: "#FFFFFF" }]}>
            @{userData?.firstname || "Loading..."}
          </Text>
        </View>

        <View style={styles.profilecard}>
          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "bold", fontSize: 18, color: "#3F3C3C" }]}>
              Name
            </Text>
            <Text style={[styles.text, { fontWeight: "300", fontSize: 18, color: "#B7B7B7" }]}>
              {userData?.firstname || "Loading..."} {userData?.surname}
            </Text>
          </View>

          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "bold", fontSize: 18, color: "#3F3C3C" }]}>
              E-mail
            </Text>
            <Text style={[styles.text, { fontWeight: "300", fontSize: 18, color: "#B7B7B7" }]}>
              {userData?.email || "Loading..."}
            </Text>
          </View>

          {/* <View style={styles.separator}></View> */}

          <View style={styles.Logout}>
            <TouchableOpacity onPress={(Logout)}>
              <Text style={[styles.buttonText, { fontWeight: "500", color: "#5CA3FF" }]}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profilecard: {
    backgroundColor: "white",
    width: '75%',
    height: '55%',
    borderRadius: 30,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginRight: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#D9D9D9',
    marginTop: '80%',
  },
  name: {
    marginBottom: 20,
  },
  information: {
    alignItems: "center",
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  Logout: {
    alignItems: "center",
    paddingTop: "1%",
    marginTop: '80%',
  },
  text: {
    color: '#B7B7B7',
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: "6%",
    color: "#ffffff",
    backgroundColor: "transparent",
    alignSelf: "center",
  },
  iconleft: {
    marginRight: "80%"
  },
});

export default Profile;