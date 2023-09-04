import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'
import firebase from 'firebase/compat/app';


const firebaseConfig = {
    apiKey: "AIzaSyBpQprGXUcY8y-SEUxVBOM4t6d9oeZ427g",
    authDomain: "movieweb-d0425.firebaseapp.com",
    projectId: "movieweb-d0425",
    storageBucket: "movieweb-d0425.appspot.com",
    messagingSenderId: "1040440912218",
    appId: "1:1040440912218:web:f2ad4bf82ec78e8db42b63",
    measurementId: "G-754E77M78S"
  };


// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
