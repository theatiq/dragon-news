// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBURk3Xu8e-k9J1aDb9BBno1kO1eU_CVFo",
    authDomain: "dragon-news-atiqur.firebaseapp.com",
    projectId: "dragon-news-atiqur",
    storageBucket: "dragon-news-atiqur.firebasestorage.app",
    messagingSenderId: "632853598084",
    appId: "1:632853598084:web:2ed678fae05891cc1297d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app