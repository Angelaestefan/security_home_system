// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA_dgW_8jBnnreXMNmLLps91l1gRZygkbE",
  authDomain: "semanatec-9cc84.firebaseapp.com",
  databaseURL: "https://semanatec-9cc84-default-rtdb.firebaseio.com",
  projectId: "semanatec-9cc84",
  storageBucket: "semanatec-9cc84.appspot.com",
  messagingSenderId: "149397337312",
  appId: "1:149397337312:web:9339adfc8f820a05cfcc85",
  measurementId: "G-6JEWWM6V1F"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database}