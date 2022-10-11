import firebase from 'firebase/compat/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6rLQLOq8QjVrYPBU2Tn5l1gaN3Qzls3Q",
    authDomain: "ecom-clone-154d8.firebaseapp.com",
    projectId: "ecom-clone-154d8",
    storageBucket: "ecom-clone-154d8.appspot.com",
    messagingSenderId: "186809830274",
    appId: "1:186809830274:web:a97c2a61dad18cb36b9d9b",
    measurementId: "G-V2Q9GBLH5R"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();
  export const auth = getAuth();
  export default firebase;