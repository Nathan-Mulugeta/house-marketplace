// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBBkTJ-tC5WFsOpq1LN0YsUVPBKg8ci58",
  authDomain: "house-marketplace-app-12f45.firebaseapp.com",
  projectId: "house-marketplace-app-12f45",
  storageBucket: "house-marketplace-app-12f45.appspot.com",
  messagingSenderId: "8422490787",
  appId: "1:8422490787:web:992aac5374cbf74976f516",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
