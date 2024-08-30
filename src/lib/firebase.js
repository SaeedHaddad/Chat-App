import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b9fbb.firebaseapp.com",
  projectId: "reactchat-b9fbb",
  storageBucket: "reactchat-b9fbb.appspot.com",
  messagingSenderId: "298906889297",
  appId: "1:298906889297:web:8730eb148b6322511bdc70"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()