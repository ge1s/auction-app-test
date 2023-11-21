// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATq8L7eaoWJ3IBwwDVQQg7fbGmpR-KBNU",
  authDomain: "auction-app-test.firebaseapp.com",
  projectId: "auction-app-test",
  storageBucket: "auction-app-test.appspot.com",
  messagingSenderId: "545720373324",
  appId: "1:545720373324:web:7d9c472bae3bcdb63ea4e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
