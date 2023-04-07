// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9PHR3ski-mYXOIo15-9TjVjAiBeHoTwA",
  authDomain: "sortings-9b3a3.firebaseapp.com",
  projectId: "sortings-9b3a3",
  storageBucket: "sortings-9b3a3.appspot.com",
  messagingSenderId: "1070230020544",
  appId: "1:1070230020544:web:b4e8397c30ea3cae852825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)