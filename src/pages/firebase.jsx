// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjs91vK9fpx5b9-PecstBF1TAX3yRXC_U",
  authDomain: "exp-site1.firebaseapp.com",
  projectId: "exp-site1",
  storageBucket: "exp-site1.appspot.com",
  messagingSenderId: "543707937293",
  appId: "1:543707937293:web:0f2eebf57ee137a32d7344",
  measurementId: "G-1W65KJEF9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);