// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
import {getStorage, ref} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtt9OHoKp4US4sI7zm-9v3Rcw0G2vsr7g",
  authDomain: "nexusmart-867e0.firebaseapp.com",
  projectId: "nexusmart-867e0",
  storageBucket: "nexusmart-867e0.appspot.com",
  messagingSenderId: "555871393154",
  appId: "1:555871393154:web:aaadbf0b5b332761982b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db= getFirestore(app);
export const storage= getStorage(app)
export default app