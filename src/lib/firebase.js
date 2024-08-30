import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-98d19.firebaseapp.com",
  projectId: "chatapp-98d19",
  storageBucket: "chatapp-98d19.appspot.com",
  messagingSenderId: "249859389796",
  appId: "1:249859389796:web:decf4911e3941f3f142271",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Pass the app object to these functions
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
