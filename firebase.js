// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCH9CeUn88EELoBpGpdKITMYXKA8GAVa7U",
  authDomain: "tongarant.firebaseapp.com",
  projectId: "tongarant",
  storageBucket: "tongarant.appspot.com",
  messagingSenderId: "645663892446",
  appId: "1:645663892446:web:eb0b1647787c0bdc9ff34f",
  measurementId: "G-N1Q2PG0K2D",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
