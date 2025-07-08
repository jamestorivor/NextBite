import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClYWvWMYOkN_5rZ9KnIV3GNoLJIu-lJcY",
  authDomain: "nextbite-b56e3.firebaseapp.com",
  projectId: "nextbite-b56e3",
  storageBucket: "nextbite-b56e3.firebasestorage.app",
  messagingSenderId: "17446581258",
  appId: "1:17446581258:web:a0a64610c561198c67dbf3",
  measurementId: "G-CRXHP39W94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };