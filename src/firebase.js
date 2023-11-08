// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBquRDfnpjcgArMe_wIfO0efewg8ntpums",
  authDomain: "bookhaven-df029.firebaseapp.com",
  projectId: "bookhaven-df029",
  storageBucket: "bookhaven-df029.appspot.com",
  messagingSenderId: "613195968870",
  appId: "1:613195968870:web:0809690b93b17fa79f58a7",
  measurementId: "G-CPD87LHH90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
