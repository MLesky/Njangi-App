// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier }from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG0QQ7QmFiBdtj7TSqkjZ2hWVmR55Jqy4",
  authDomain: "njangi-app-299d6.firebaseapp.com",
  projectId: "njangi-app-299d6",
  storageBucket: "njangi-app-299d6.appspot.com",
  messagingSenderId: "266477799932",
  appId: "1:266477799932:web:42c244053c7a91c6b54a79",
  measurementId: "G-LTSLVTY33R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;