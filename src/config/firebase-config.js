import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA57GWCUFxIZQdaCJiCHDKjGcq1nz28wSE",
  authDomain: "auth-development-b4ec0.firebaseapp.com",
  projectId: "auth-development-b4ec0",
  storageBucket: "auth-development-b4ec0.appspot.com",
  messagingSenderId: "482582257072",
  appId: "1:482582257072:web:152ab1b8dbcd4a69648a75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
