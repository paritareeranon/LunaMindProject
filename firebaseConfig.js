// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfunqJuLaHsCSPj4slm5YHguzVlNHDxTw",
  authDomain: "lunamind-f6b59.firebaseapp.com",
  projectId: "lunamind-f6b59",
  storageBucket: "lunamind-f6b59.appspot.com",
  messagingSenderId: "748228613145",
  appId: "1:748228613145:web:e1a12ed5789c9c410d4688",
  measurementId: "G-9JS5PJEJQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)

export { app, auth, firestore }