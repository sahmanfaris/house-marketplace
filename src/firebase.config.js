import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4aWo8OUZPm_TgkDcGboI3Q3AOzwxtzf0",
  authDomain: "house-marketplace-app-fdbff.firebaseapp.com",
  projectId: "house-marketplace-app-fdbff",
  storageBucket: "house-marketplace-app-fdbff.appspot.com",
  messagingSenderId: "225610176432",
  appId: "1:225610176432:web:feee374c3a9f243b87a875",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
