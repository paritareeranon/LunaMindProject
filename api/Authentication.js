import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CreateUser = (user, pass) => {
    try {
      createUserWithEmailAndPassword(auth, user, pass);
      console.log("User account created & signed in!");
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      } else if (e.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
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