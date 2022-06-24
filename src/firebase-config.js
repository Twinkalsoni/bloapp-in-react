// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjA5chQjfFiXxkvdZuTxb3UiXFjLscxFI",
  authDomain: "blog-3572f.firebaseapp.com",
  projectId: "blog-3572f",
  storageBucket: "blog-3572f.appspot.com",
  messagingSenderId: "537007178789",
  appId: "1:537007178789:web:2d515d67e4c8d27bafabcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();