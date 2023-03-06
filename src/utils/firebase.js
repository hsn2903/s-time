// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// auth
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzQpUeNkEBlxy5JYuQn0axGiHM-Yr5-f8",
  authDomain: "fir-time-5c45a.firebaseapp.com",
  projectId: "fir-time-5c45a",
  storageBucket: "fir-time-5c45a.appspot.com",
  messagingSenderId: "69942528285",
  appId: "1:69942528285:web:0910ac19efd7ac418af9f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ------------------------------------------------------------------------------
// Auth
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleAuthProvider);
};

// ------------------------------------------------------------------------------
// Save User
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //                 database   collection     uniqueId
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // check if user exist
  // if not - create user document with the data from userAuth
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
