// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBJ1FL2nsXi9_jbeyK4hy6zhMtFCLV7xk",
  authDomain: "habito-iurman.firebaseapp.com",
  projectId: "habito-iurman",
  storageBucket: "habito-iurman.appspot.com",
  messagingSenderId: "853513810174",
  appId: "1:853513810174:web:9106f415963261e45735af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);