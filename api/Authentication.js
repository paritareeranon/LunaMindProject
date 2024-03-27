import { signInWithEmailAndPassword, createUserWithEmailAndPassword ,signOut} from "firebase/auth";
import { auth, firestore } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, doc, setDoc } from "firebase/firestore";

export const CreateUser = async (email, password, firstname, surname, navigation) => {
  try {
    // สร้างผู้ใช้ใน Authentication
    console.log("email " ,email);
    console.log("password ", password);
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User account created & signed in!");
    
    // เพิ่มข้อมูลใหม่ลงใน Firestore
    const colRef = collection(firestore,'UserInfo');
    const docRef = doc(colRef, email);

    await setDoc(docRef, {
      email: email,
      firstname: firstname,
      surname: surname,
    })
    console.log("Add success");
    
    alert("Register success!");
    navigation.navigate("LoginView");
  } catch (e) {
    
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