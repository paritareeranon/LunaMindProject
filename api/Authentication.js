import { signInWithEmailAndPassword, createUserWithEmailAndPassword ,signOut} from "firebase/auth";
import { auth, firestore } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, doc, addDoc } from "firebase/firestore";


export const CreateUser = async (navigation,email, password, firstname, surname, weight, height) => {
  try {
    // สร้างผู้ใช้ใน Authentication
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User account created & signed in!");
    
    // เพิ่มข้อมูลใหม่ลงใน Firestore
    const docRef = await addDoc(collection(firestore, "testuser"), {
      email: email.toLowerCase(),
      firstname: firstname,
      surname: surname,
      weight: weight,
      height: height
    });
    
    console.log("User data added to Firestore with ID: ", docRef.id);
    alert("Register success!");
    navigation.navigate("LoginView");
  } catch (e) {
    if (e.code === "auth/email-already-in-use") {
      console.log("That email address is already in use!");
      alert("That email address is already in use!");
    } else if (e.code === "auth/invalid-email") {
      console.log("That email address is invalid!");
      alert("That email address is invalid!");
    } else {
      console.error("CreateUserError: " + e.message);
    }
  }
};

  export const UserAuth = async (user, pass) => {
    try {
      await signInWithEmailAndPassword(auth, user, pass);
      const currentUser = auth.currentUser;
  
      if (user) {
        const userToken = await currentUser.getIdToken();
        await AsyncStorage.setItem("userToken", userToken); 
  
        console.log("User account signed in!");
  
        return { status: true, message: "success" };
      } else {
        throw new Error("User not found");
      }
  
    } catch (e) {
      return { status: false, message: e.code };
    }
  };

  export const signedOut = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("userToken");
      console.log("User signed out!");
      return true; 
    } catch (e) {
      console.error("Error signing out:", e);
      return false; 
    }
  };