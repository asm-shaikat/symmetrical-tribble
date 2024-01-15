// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkQmNN47p73rAikBo_QLH9Dzpu7mkp5yc",
  authDomain: "react-firebsae-crud.firebaseapp.com",
  projectId: "react-firebsae-crud",
  storageBucket: "react-firebsae-crud.appspot.com",
  messagingSenderId: "474657073038",
  appId: "1:474657073038:web:1f050e526bdc4a95a926df",
  measurementId: "G-1CZNHKLP0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
