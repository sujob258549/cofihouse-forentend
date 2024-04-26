// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeZN8_hVu2Qe3UYlFETTiXBl62garqP50",
  authDomain: "cofi-house.firebaseapp.com",
  projectId: "cofi-house",
  storageBucket: "cofi-house.appspot.com",
  messagingSenderId: "117171287096",
  appId: "1:117171287096:web:e57a0db0c7edf4e04ea2cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;