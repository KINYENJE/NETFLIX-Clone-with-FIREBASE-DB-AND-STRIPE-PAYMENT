import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUwX55Z-7weMxZZ2P1IgnNWKp4sWvd7gQ",
  authDomain: "netflix-682a7.firebaseapp.com",
  projectId: "netflix-682a7",
  storageBucket: "netflix-682a7.appspot.com",
  messagingSenderId: "1062354003479",
  appId: "1:1062354003479:web:4f9cb58193806aec8ade52"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;