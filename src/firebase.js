import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCaTwkU731GKDcizHThXjcOilhNeWIpyU4",
  authDomain: "whatsapp-erizo.firebaseapp.com",
  projectId: "whatsapp-erizo",
  storageBucket: "whatsapp-erizo.appspot.com",
  messagingSenderId: "590174878199",
  appId: "1:590174878199:web:6291099af3d75a48e4d6f2",
  measurementId: "G-PLE324S2C8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;