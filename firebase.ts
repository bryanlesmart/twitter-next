// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-next-15318.firebaseapp.com",
  projectId: "twitter-next-15318",
  storageBucket: "twitter-next-15318.appspot.com",
  messagingSenderId: "350689344865",
  appId: "1:350689344865:web:7fdeed213a6ac4cfcf9920"
};
// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };

