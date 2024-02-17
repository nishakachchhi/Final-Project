// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-state-full-stack.firebaseapp.com",
  projectId: "e-state-full-stack",
  storageBucket: "e-state-full-stack.appspot.com",
  messagingSenderId: "391373964332",
  appId: "1:391373964332:web:13f96e357c234ff3fcbd89",
  measurementId: "G-95ZJWWPNLR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
