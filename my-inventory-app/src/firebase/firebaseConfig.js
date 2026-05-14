import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // Ye saari details tune Settings > General mein SDK Config mein dekhi hain
  apiKey: "TERA_API_KEY_YAHAN_DAAL", 
  authDomain: "fire-database-11.firebaseapp.com",
  databaseURL: "https://fire-database-11-default-rtdb.firebaseio.com/", // Tera URL maine daal diya hai
  projectId: "fire-database-11",
  storageBucket: "fire-database-11.appspot.com",
  messagingSenderId: "TERA_SENDER_ID_YAHAN_DAAL",
  appId: "TERA_APP_ID_YAHAN_DAAL"
};

// Firebase initialize karo
const app = initializeApp(firebaseConfig);

// Realtime Database export karo taaki inventorySlice mein use ho sake
export const db = getDatabase(app);