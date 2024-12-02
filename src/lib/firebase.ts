
import { initializeApp } from "firebase/app"
import {getFirebaseApp} from 'firebase/app'
//import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAqXu7gGkuD1hOesYUsQi1OStGj2Xs1j3E",
  authDomain: "ecommerce-4922e.firebaseapp.com",
  projectId: "ecommerce-4922e",
  storageBucket: "ecommerce-4922e.firebasestorage.app",
  messagingSenderId: "78505113562",
  appId: "1:78505113562:web:e7bda7bbdb29f33af0b2e3",
  measurementId: "G-3ZMKLBVC5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirebaseApp(app)
//const analytics = getAnalytics(app)

export default db