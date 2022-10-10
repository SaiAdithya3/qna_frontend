


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTmIgzLSHoOokwqAyi4PNJGOZSRkUOPNY",
  authDomain: "quora-clone-e9a0a.firebaseapp.com",
  projectId: "quora-clone-e9a0a",
  storageBucket: "quora-clone-e9a0a.appspot.com",
  messagingSenderId: "313782405174",
  appId: "1:313782405174:web:ed5ad97c32d03e2265f097",
  measurementId: "G-136KFJF11Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };

