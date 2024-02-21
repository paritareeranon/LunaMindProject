// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg8NEM1nuRusc2pDa2tXVH9peleXzqgw8",
  authDomain: "lunamind-574f0.firebaseapp.com",
  projectId: "lunamind-574f0",
  storageBucket: "lunamind-574f0.appspot.com",
  messagingSenderId: "513391719260",
  appId: "1:513391719260:web:26ae5f69e46491424b0799",
  measurementId: "G-0GRVQPTGVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

