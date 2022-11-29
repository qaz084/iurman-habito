// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe3VeubnaC0DrDcmRYcDiC2gX9nzQj6Eg",
  authDomain: "tante-8509e.firebaseapp.com",
  projectId: "tante-8509e",
  storageBucket: "tante-8509e.appspot.com",
  messagingSenderId: "886194655859",
  appId: "1:886194655859:web:8407978a138dc7a3541006"
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);