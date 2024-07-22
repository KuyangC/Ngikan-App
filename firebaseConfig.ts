import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDT7YmhlOZCUvFNyas5hsW8cVZ-MO9xaEg",
    authDomain: "ngikan-46a38.firebaseapp.com",
    projectId: "ngikan-46a38",
    storageBucket: "ngikan-46a38.appspot.com",
    messagingSenderId: "570164367745",
    appId: "1:570164367745:web:c8836df45e9ab5ecab9880",
    measurementId: "G-M1XCCP8ZD3"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
