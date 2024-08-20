// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-ffd57.firebaseapp.com",
  projectId: "blog-ffd57",
  storageBucket: "blog-ffd57.appspot.com",
  messagingSenderId: "1048543906871",
  appId: "1:1048543906871:web:69603ef9b47353357943b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);