import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAQXTaI6lcL4SnMsUdMedkQdFfzdD6eHkM",
    authDomain: "x-typed-master-b9dc7.firebaseapp.com",
    projectId: "x-typed-master-b9dc7",
    storageBucket: "x-typed-master-b9dc7.firebasestorage.app",
    messagingSenderId: "978081860082",
    appId: "1:978081860082:web:d6424433cff0c04155836b"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };