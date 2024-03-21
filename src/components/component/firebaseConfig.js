// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBqgnTU4O5GO6T2vQwAtwuthRwCqOjnYhI",
  authDomain: "security-home-99195.firebaseapp.com",
  databaseURL: "https://security-home-99195-default-rtdb.firebaseio.com/",
  projectId: "security-home-99195",
  storageBucket: "security-home-99195.appspot.com",
  messagingSenderId: "672564205502",
  appId: "1:672564205502:web:da5832edf6e8f85a528bef",
  measurementId: "G-BZ7N6XX8N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database}