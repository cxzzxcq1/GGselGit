import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database"; // Импортируем необходимые функции для работы с Realtime Database
import { getAnalytics, isSupported } from "firebase/analytics"; // Аналитика, если она нужна

const firebaseConfig = {
  apiKey: "AIzaSyCH9CeUn88EELoBpGpdKITMYXKA8GAVa7U",
  authDomain: "tongarant.firebaseapp.com",
  projectId: "tongarant",
  storageBucket: "tongarant.appspot.com",
  messagingSenderId: "645663892446",
  appId: "1:645663892446:web:eb0b1647787c0bdc9ff34f",
  measurementId: "G-N1Q2PG0K2D",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация Analytics только в браузере
let analytics;

if (typeof window !== "undefined" && isSupported()) {
  analytics = getAnalytics(app);
} else {
  console.log("Firebase Analytics не поддерживается в данной среде (Node.js)");
}

// Инициализация Realtime Database
const database = getDatabase(app);

export { app, analytics, database };
