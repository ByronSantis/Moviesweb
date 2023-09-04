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
   //Acá va tu configuracion de tu firebase.
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
