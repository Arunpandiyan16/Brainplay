// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "brainplay-x7d62",
  appId: "1:619230643895:web:23cd0007a4a29ae3a4af32",
  storageBucket: "brainplay-x7d62.firebasestorage.app",
  apiKey: "AIzaSyC4lf2Q1yUQw8Eufi6Xu3rQLomIk8qfOAM",
  authDomain: "brainplay-x7d62.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "619230643895"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
