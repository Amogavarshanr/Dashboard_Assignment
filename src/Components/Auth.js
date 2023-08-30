import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

//  web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyD30gXdNaLode4x0BXyFJjj2R6CWGh61CI",

  authDomain: "dashboard-62079.firebaseapp.com",

  projectId: "dashboard-62079",

  storageBucket: "dashboard-62079.appspot.com",

  messagingSenderId: "26400540466",

  appId: "1:26400540466:web:86ccec9dc0ed6fea9c792b",

  measurementId: "G-CS1CLCJYMM"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
