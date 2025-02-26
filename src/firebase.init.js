// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX8-tNPiDU0MtsGDB_GbTd5f4S--PNQVs",
  authDomain: "email-password-auth-c8d50.firebaseapp.com",
  projectId: "email-password-auth-c8d50",
  storageBucket: "email-password-auth-c8d50.firebasestorage.app",
  messagingSenderId: "88119178865",
  appId: "1:88119178865:web:d8e7649c70779f5c720dd0",
  measurementId: "G-X9SW2G9M4F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
