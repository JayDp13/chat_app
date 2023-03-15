import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-fce5a.firebaseapp.com",
  projectId: "chat-fce5a",
  storageBucket: "chat-fce5a.appspot.com",
  messagingSenderId: "658101741935",
  appId: "1:658101741935:web:9a3d97383b99c93969a09a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
