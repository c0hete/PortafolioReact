import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAFTRX28aCvu7HUddu41th8dhF4VpVr-gw",
  authDomain: "portafolio-jose-alv-mazz-dev.firebaseapp.com",
  projectId: "portafolio-jose-alv-mazz-dev",
  storageBucket: "portafolio-jose-alv-mazz-dev.appspot.com",
  messagingSenderId: "696167828362",
  appId: "1:696167828362:web:5d656d86017ae2ced59673",
  measurementId: "G-NSSEEDY5TY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
