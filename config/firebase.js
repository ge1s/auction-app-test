// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU9DCDRBXjv02lY1skIRZg2mcNsphS_r4",
  authDomain: "auctions-login.firebaseapp.com",
  projectId: "auctions-login",
  storageBucket: "auctions-login.appspot.com",
  messagingSenderId: "75854626261",
  appId: "1:75854626261:web:c99d2157cd9687aacc515c",
};

// these keys won't work because i've removed the app from firebase
// add your app on firebase, copy firebaseConfig here, enable email/password auth
// and test the app ;)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
