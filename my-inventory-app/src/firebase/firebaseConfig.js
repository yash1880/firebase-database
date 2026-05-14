import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDipcoXCYXgLTGNnTRlE9vGwPQie33p44c",
  authDomain: "fire-database-11.firebaseapp.com",
  databaseURL: "https://fire-database-11-default-rtdb.firebaseio.com",
  projectId: "fire-database-11",
  storageBucket: "fire-database-11.firebasestorage.app",
  messagingSenderId: "145298023841",
  appId: "1:145298023841:web:ecb6a41a4519a2a31897e0",
  measurementId: "G-QDQ19RXYY4"
};

// Firebase initialize karo
const app = initializeApp(firebaseConfig);

// Realtime Database export karo taaki inventorySlice mein use ho sake
export const db = getDatabase(app);
