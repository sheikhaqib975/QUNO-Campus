// firebase.js or firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDONk14PuawqAHH7cao67jGwrZ_rNXV3Ug",
  authDomain: "quno-campus.firebaseapp.com",
  projectId: "quno-campus",
  storageBucket: "quno-campus.firebasestorage.app",
  messagingSenderId: "115255581751",
  appId: "1:115255581751:web:2ee0f1bbbcaff0ea8bb3b2",
  measurementId: "G-DMM2658Q6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
