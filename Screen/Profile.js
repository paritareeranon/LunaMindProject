import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage"; // นำเข้า AsyncStorage
import { firestore } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [checkuser, setCheckuser] = useState(null);

  useEffect(() => {
    const getUserAccount = async () => {
      try {
        const userAccount = await AsyncStorage.getItem("useraccount"); // Retrieve user account data from AsyncStorage
        if (userAccount !== null) {
          console.log("User Account:", userAccount);
          // Extract user ID from user account data (replace this with your logic)
          await fetchUserData(userAccount);
          // Fetch user data using the extracted user ID
          // fetchUserData(userId);
        }
      } catch (error) {
        console.error("Error getting user account:", error);
      }
    };

    getUserAccount();
  }, []);

  const fetchUserData = async (checkuser) => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(firestore, "testuser"),
          where("email", "==", checkuser)
        )
      );
  
      if (querySnapshot.empty) {
        alert("No user found with the provided email");
      } else {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setUserData(data);
          console.log(
            "firstname:", data.firstname,
            "surname:", data.surname,
            "email:", data.email
          );
        });
        console.log("User sign-in successful");
        // navigation.navigate("HomeScreen");
      }
    } catch (err) {
      console.error("SignIn failed", err.message);
    }
  };

  const handleGoBack = () => {
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
          onPress: () => navigation.navigate("LoginView"), // navigate back to login screen
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      source={require("../img/ProfileScreen.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.iconleft}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon name="arrow-left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileImage}>
          <Image
            source={require("../img/chitanda.gif")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.name}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            @{userData?.firstname || 'Loading...'}
          </Text>
        </View>

        <View style={styles.profilecard}>
          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 28 }]}>
              Name
            </Text>

            <Text style={[styles.text, { fontWeight: "200", fontSize: 24 }]}>
              {userData?.firstname|| 'Loading...'} {userData?.surname}
            </Text>
          </View>

          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 28 }]}>
              E-mail
            </Text>

            <Text style={[styles.text, { fontWeight: "200", fontSize: 24 }]}>
              {userData?.email|| 'Loading...'}
            </Text>
          </View>

          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 28 }]}>
              Weight/Height
            </Text>

            <Text style={[styles.text, { fontWeight: "200", fontSize: 24 }]}>
              50/160
            </Text>
          </View>

          <LinearGradient colors={["#FDB5CD", "#D2D5F8"]} style={styles.button}>
            <TouchableOpacity onPress={""}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
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
    width: 300,
    height: 400,
    borderRadius: 30,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
    borderColor: "white",
    borderWidth: 6,
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
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  text: {
    marginTop: 10,
    alignSelf: "center",
  },
  button: {
    width: "80%",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 35,
    marginTop: 5,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
    alignSelf: "center",
  },
  iconleft: {
    alignSelf: "left",
    marginleft: "20",
  },
});

export default Profile;
