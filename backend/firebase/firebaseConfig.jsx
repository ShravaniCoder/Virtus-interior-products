// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwJUqj32Ma51qKCpZQoVSe4Pcjjsz4fz8",
  authDomain: "virtus-interior.firebaseapp.com",
  projectId: "virtus-interior",
  storageBucket: "virtus-interior.appspot.com",
  messagingSenderId: "85521599316",
  appId: "1:85521599316:web:91bf210477b1c4d64c56c1",
  measurementId: "G-5ZRCH0LYF5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { analytics, fireDB, auth, storage };
