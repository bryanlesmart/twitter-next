// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFireStore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-8e460.firebaseapp.com",
  projectId: "twitter-8e460",
  storageBucket: "twitter-8e460.appspot.com",
  messagingSenderId: "851905385293",
  appId: "1:851905385293:web:e7a5532fa985135be21d04",
  
};

// Initialize Firebase
const app = !getApps().length ? = initializeApp(firebaseConfig): getApp;
const db = getFireStore()
const storage = getStorge()

export { app, db , storage }

