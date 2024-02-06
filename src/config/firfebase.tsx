// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS2E-KISmMouganQtdsLUfPqp60mcBj3U",
  authDomain: "floreria-f2800.firebaseapp.com",
  projectId: "floreria-f2800",
  storageBucket: "floreria-f2800.appspot.com",
  messagingSenderId: "1092093576578",
  appId: "1:1092093576578:web:63ae75a19136b5a1e43b9b",
  measurementId: "G-0L18FFTDXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const storage = firebase.storage();
