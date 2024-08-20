// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5GYYZrLot9EJeMn1xTlRC8tsH_s5SWK0",
  authDomain: "contact-web-app-b4f96.firebaseapp.com",
  projectId: "contact-web-app-b4f96",
  storageBucket: "contact-web-app-b4f96.appspot.com",
  messagingSenderId: "633432685169",
  appId: "1:633432685169:web:98a54620c0b1a7beafb9d0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
