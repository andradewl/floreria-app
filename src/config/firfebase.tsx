import 'firebase/database';
import {initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAlJYXG8sRvmZ6JwIu2bQPMDxFyip0fds0",
  authDomain: "prowlflores.firebaseapp.com",
  projectId: "prowlflores",
  storageBucket: "prowlflores.appspot.com",
  messagingSenderId: "588699541440",
  appId: "1:588699541440:web:ea06af5a903dfa5c7af225",
  measurementId: "G-6F6Z508NGH"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();


export {app, auth, db};
