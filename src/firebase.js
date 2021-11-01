import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "whatsapp-erizo-c2167.firebaseapp.com",
  projectId: "whatsapp-erizo-c2167",
  storageBucket: "whatsapp-erizo-c2167.appspot.com",
  messagingSenderId: "430974958372",
  appId: "1:430974958372:web:911f83a5db1d0dac5b51b1"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;