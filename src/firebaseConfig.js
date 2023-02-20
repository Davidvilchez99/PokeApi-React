// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbqHsnro0-JjCsJ7JDoEVK2Hu-TIrZ2j4",
  authDomain: "dva-pokeapi.firebaseapp.com",
  projectId: "dva-pokeapi",
  storageBucket: "dva-pokeapi.appspot.com",
  messagingSenderId: "888668629471",
  appId: "1:888668629471:web:bebe74914825e154993c6a",
  measurementId: "G-5GRS8NSNTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);