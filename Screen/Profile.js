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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firestore } from "../firebaseConfig";
import { collection, doc, getDocs ,query,where} from "firebase/firestore";
import { signedOut } from '../api/Authentication';

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState({email:"",firstname:"",surname:"",weight:"",height:""});

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

  const fetchUserData = async (checkuser) => {
    console.log(checkuser);
    try {
        const querySnapshot = await getDocs(query(collection(firestore, "testuser"), where("email", "==", checkuser)));

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            const userData = doc.data();
            // ตรวจสอบว่าฟิลด์ email หรือชื่อฟิลด์ที่ใช้เกี่ยวกับอีเมล์มีชื่ออะไร
            // และใช้ชื่อนั้นในการเข้าถึงค่าอีเมล์
            const userEmail = userData.email;
            console.log("email:", userEmail);
            setUserData((prevUserData) => ({
              ...prevUserData,
              email: userData.email,
              firstname :userData.firstname,
              surname :userData.surname,
              weight :userData.weight,
              height :userData.height
            }));
            // ทำสิ่งที่คุณต้องการกับข้อมูลที่ได้รับ เช่น การตั้งค่า state หรือการทำงานอื่น ๆ ที่คุณต้องการดำเนินการต่อไปกับข้อมูลผู้ใช้ที่ได้รับจาก Firestore
        });

    } catch (err) {
        console.error("Error fetching user data:", err.message);
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
            <Icon name="arrow-left" size={25} color="black" />
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
          <Text style={[styles.text, { fontWeight: "bold", fontSize: 24 ,color:"#FFFFFF"}]}>
            @{userData?.firstname || "Loading..."}
          </Text>
        </View>

        <View style={styles.profilecard}>
          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "bold", fontSize: 18 ,color:"#3F3C3C"}]}>
              Name
            </Text>
            <Text style={[styles.text, { fontWeight: "300", fontSize: 18 ,color:"#B7B7B7"}]}>
              {userData?.firstname || "Loading..."} {userData?.surname}
            </Text>
          </View>

          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "bold", fontSize: 18 ,color:"#3F3C3C"}]}>
              E-mail
            </Text>
            <Text style={[styles.text, { fontWeight: "300", fontSize: 18 ,color:"#B7B7B7" }]}>
              {userData?.email || "Loading..."}
            </Text>
          </View>

          <View style={styles.information}>
            <Text style={[styles.text, { fontWeight: "bold", fontSize: 18 ,color:"#3F3C3C"}]}>
              Height/Weight
            </Text>
            <Text style={[styles.text, { fontWeight: "300", fontSize: 18 ,color:"#B7B7B7"}]}>
              {userData?.height || "Loading..."}/{userData?.weight}
            </Text>
          </View>
          <View style={styles.infobt}>
          <View colors={["#FDB5CD", "#D2D5F8"]} style={styles.button}>
            <TouchableOpacity onPress={(Logout)}>
              <Text style={[styles.buttonText,{fontWeight:"500",color:"#5CA3FF"}]}>Log Out</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.editbt}>
          <LinearGradient colors={["#FDB5CD", "#D2D5F8"]} style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate("EditUser")}>
              <Text style={[styles.buttonText,{fontWeight:"500"}]}>Edit Userprofile</Text>
            </TouchableOpacity>
          </LinearGradient>
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
    width: 138,
    height: 138,
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
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  infobt: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  editbt: {
    alignItems: "center",
    paddingTop: "22%",
  },
  text: {
    marginTop: 10,
    alignSelf: "center",
  },
  button: {
    width: "80%",
    paddingLeft: "15%",
    paddingRight: "15%",
    borderRadius: "8%",
    marginTop: "3%",
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
    marginRight:"80%"
      },
});

export default Profile;