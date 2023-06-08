// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHMeaPLc9S5G0S7m4PjXRTXKjgoqJQAd8",
  authDomain: "avank-21bc1.firebaseapp.com",
  projectId: "avank-21bc1",
  storageBucket: "avank-21bc1.appspot.com",
  messagingSenderId: "605180580960",
  appId: "1:605180580960:web:0ed13626b1e6833baa5f05",
  measurementId: "G-KQDV19JQ5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};