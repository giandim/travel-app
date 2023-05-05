import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "XXXXX",
  authDomain: "XXXXX",
  projectId: "XXXXX",
  storageBucket: "XXXXX",
  messagingSenderId: "XXXXX",
  appId: "XXXXX",
  measurementId: "XXXXX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const provider = new GoogleAuthProvider();

export { auth, db, provider };
