// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDp8QHJQtXjheYAwvZjptSqH8T_9c6yaJc',
  authDomain: 'tq-eksamen.firebaseapp.com',
  projectId: 'tq-eksamen',
  storageBucket: 'tq-eksamen.firebasestorage.app',
  messagingSenderId: '673718453438',
  appId: '1:673718453438:web:471dfd0c7fcda593fd0aef',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);
