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
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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

// Initialize & export Firestore
export const db = getFirestore(app);

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

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export { doc, getDoc, setDoc };

// Update a document by ID
const updateDocument = async (collectionName, id, data) => {
  await updateDoc(doc(db, collectionName, id), data);
};

// Delete a document by ID
const deleteDocument = async (collectionName, id) => {
  await deleteDoc(doc(db, collectionName, id));
  fetchTasks();
};

const fetchTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  const documents = [];
  querySnapshot.forEach((doc) => {
    documents.push({ id: doc.id, ...doc.data() });
  });
  setTasks(documents);
};

const addTodo = async () => {
  await addDoc(collection(db, "tasks"), {
    taskName: taskName,
    userId: currentUser?.uid || null,
    completed: false,
    important: false,
  });
  setTaskName("");
  fetchTasks();
};
