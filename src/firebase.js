// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "key", // fill with your Firebase project credentials
  authDomain: "ats-killer-canada.firebaseapp.com",
  projectId: "ats-killer-canada",
  // ...other keys as provided in your Firebase console
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);
const db = getFirestore(app);

export { auth, provider, firestore,db  };
