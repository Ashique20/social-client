// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5gNKlxWFATxkTaNjAy25SzseETSJKPPI",
  authDomain: "new-test-b022d.firebaseapp.com",
  projectId: "new-test-b022d",
  storageBucket: "new-test-b022d.appspot.com",
  messagingSenderId: "891573398547",
  appId: "1:891573398547:web:42aa3641a682eb1c3123e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;