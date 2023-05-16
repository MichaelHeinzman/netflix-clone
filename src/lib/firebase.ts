// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp4gdE6khHs-hj-zlQ3aTQawlj5EUfe7Y",
  authDomain: "netflix-clone-nextjs-a5f5a.firebaseapp.com",
  projectId: "netflix-clone-nextjs-a5f5a",
  storageBucket: "netflix-clone-nextjs-a5f5a.appspot.com",
  messagingSenderId: "945239263538",
  appId: "1:945239263538:web:262db856c26f7c222b6f2b",
  measurementId: "G-MB8E0XR55H",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
