import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh3m6rygriVhUz7n3Kc6hYNF_FDiqUi9A",
  authDomain: "arjitpi42.firebaseapp.com",
  projectId: "arjitpi42",
  storageBucket: "arjitpi42.appspot.com",
  messagingSenderId: "963867538840",
  appId: "1:963867538840:web:328222f1c685133dfee7ed",
  measurementId: "G-QXSF861DBP"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };