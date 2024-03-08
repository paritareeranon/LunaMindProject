import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firestore } from "../firebaseConfig";
import { getDocs, query, collection, where, doc, updateDoc } from "firebase/firestore"; // Import doc function

const EditUser = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    const getUserAccount = async () => {
      try {
        const userAccount = await AsyncStorage.getItem("useraccount");
        if (userAccount !== null) {
          console.log("User Account:", userAccount);
          await fetchUserData(userAccount);
        } else {
          // Handle the case where user account is not found
        }
      } catch (error) {
        console.error("Error getting user account:", error);
      }
    };

    getUserAccount();
  }, []);

  const fetchUserData = async (userAccount) => {
    try {
      const querySnapshot = await getDocs(
        query(collection(firestore, "testuser"), where("email", "==", userAccount))
      );
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log("User Data:", userData);
        setFirstname(userData.firstname);
        setSurname(userData.surname);
        setWeight(userData.weight);
        setHeight(userData.height);
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error fetching user data
    }
  };

  const handleUpdate = async () => {
    try {
      const userAccount = await AsyncStorage.getItem("useraccount");
      if (userAccount) {
        const querySnapshot = await getDocs(
          query(collection(firestore, "testuser"), where("email", "==", userAccount))
        );
        querySnapshot.forEach(async (documentSnapshot) => {
          try {
            const docRef = doc(firestore, "testuser", documentSnapshot.id); // Correct usage of doc
            await updateDoc(docRef, {
              firstname: firstname,
              surname: surname,
              weight: weight,
              height: height
            });
            Alert.alert("Success", "User data updated successfully!");
            navigation.navigate("Profile")
          } catch (updateError) {
            console.error("Error updating document:", updateError);
            Alert.alert("Error", "Failed to update user data. Please try again later.");
          }
        });
      } else {
        Alert.alert("Error", "User account not found.");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      Alert.alert("Error", "Failed to update user data. Please try again later.");
    }
  };
  
  

  return (
    <ImageBackground
      source={require("../img/Screen.png")} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Update User Info</Text>
        <TextInput
          style={styles.input}
          placeholder="Firstname"
          value={firstname}
          onChangeText={(text) => setFirstname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Weight"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Height"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        <LinearGradient colors={["#FDB5CD", "#D2D5F8"]} style={styles.button}>
          <TouchableOpacity onPress={handleUpdate}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </LinearGradient>
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
  header: {
    fontSize: 30,
    marginTop: 50,
    padding: 40,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#3F3C3C",
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
    borderWidth: 1,
  },
  button: {
    width: "80%",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 35,
    marginTop: 13,
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
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default EditUser;
