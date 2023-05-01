// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYfx4YruuDoJwJY6SM0VdTX3RHKjxfp1c",
  authDomain: "bay-pines-foundation.firebaseapp.com",
  projectId: "bay-pines-foundation",
  storageBucket: "bay-pines-foundation.appspot.com",
  messagingSenderId: "898368631813",
  appId: "1:898368631813:web:154aed7db2ecc9b615d86c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);