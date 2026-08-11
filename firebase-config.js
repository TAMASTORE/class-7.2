// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  getDatabase, 
  ref, 
  set, 
  get, 
  push, 
  onValue, 
  update, 
  remove, 
  child 
} from "firebase/database";
import { 
  getStorage, 
  ref as storageRef, 
  uploadBytes, 
  getDownloadURL 
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqMw4y6cYzIMRMFcwjHCNzPYe-xYqm8F0",
  authDomain: "class-7-2-64d30.firebaseapp.com",
  projectId: "class-7-2-64d30",
  storageBucket: "class-7-2-64d30.firebasestorage.app",
  messagingSenderId: "249927068200",
  appId: "1:249927068200:web:d5b7cb2dbd0c5913bea31d",
  measurementId: "G-N2SX5L5W4T",
  databaseURL: "https://class-7-2-64d30-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export {
  app,
  analytics,
  auth,
  database,
  storage,
  googleProvider,
  ref,
  set,
  get,
  push,
  onValue,
  update,
  remove,
  child,
  storageRef,
  uploadBytes,
  getDownloadURL,
  signInWithPopup,
  signOut,
  onAuthStateChanged
};