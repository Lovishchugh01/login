// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkRekhawcYSW3nAQ3KYBkXMaft6-5BYng",
  authDomain: "swiggy-genie.firebaseapp.com",
  projectId: "swiggy-genie",
  storageBucket: "swiggy-genie.appspot.com",
  messagingSenderId: "996320342233",
  appId: "1:996320342233:web:9081718b89ecc723614ec8",
  measurementId: "G-C7B5JMVS2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);