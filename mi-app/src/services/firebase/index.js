import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrrZ7zdlUkmkVEsOH-BxUCqf6ahs6W3Ms",
  authDomain: "proyecto-mi-app.firebaseapp.com",
  projectId: "proyecto-mi-app",
  storageBucket: "proyecto-mi-app.appspot.com",
  messagingSenderId: "640874308866",
  appId: "1:640874308866:web:410d81c1e4658e0e0ece1b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)