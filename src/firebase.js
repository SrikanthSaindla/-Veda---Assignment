import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGBUgRsRn5L0PuiTjvlXRSxCowGA3FXmI",
    authDomain: "veda---assessment.firebaseapp.com",
    databaseURL: "https://veda---assessment-default-rtdb.firebaseio.com",
    projectId: "veda---assessment",
    storageBucket: "veda---assessment.appspot.com",
    messagingSenderId: "1092271301907",
    appId: "1:1092271301907:web:42bb8cc375f1e7405c66e6",
    measurementId: "G-W1HS1RDW87"
  };

  const app=initializeApp(firebaseConfig)

  const db=getFirestore(app)
  export {db};