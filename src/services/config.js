import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "pc--store.firebaseapp.com",
  projectId: "pc--store",
  storageBucket: "pc--store.appspot.com",
  messagingSenderId: "37310999419",
  appId: "1:37310999419:web:9ac0314443043e43beabde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//exportamos esta referencia para tenerla disponible en toda la app.