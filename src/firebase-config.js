// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkAGXfRwozOfBvPL6Ifq0m5CSOqYXDtmo",
  authDomain: "setumisma-dc7e3.firebaseapp.com",
  projectId: "setumisma-dc7e3",
  storageBucket: "setumisma-dc7e3.appspot.com",
  messagingSenderId: "543496201188",
  appId: "1:543496201188:web:f8d8a7d8ecbecd9ffc1df1",
  measurementId: "G-LK9Y5KPSRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
