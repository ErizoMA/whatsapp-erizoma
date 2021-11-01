import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "whatsapp-erizoma.firebaseapp.com",
  projectId: "whatsapp-erizoma",
  storageBucket: "whatsapp-erizoma.appspot.com",
  messagingSenderId: "813015326682",
  appId: "1:813015326682:web:b2175c65f2b56dfdbbaae3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
