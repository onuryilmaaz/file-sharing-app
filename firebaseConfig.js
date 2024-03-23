// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE9WbcYqAUYNqw9aPcoKztoH_BinGNs84",
    authDomain: "file-sharing-app-51f1f.firebaseapp.com",
    projectId: "file-sharing-app-51f1f",
    storageBucket: "file-sharing-app-51f1f.appspot.com",
    messagingSenderId: "748984784617",
    appId: "1:748984784617:web:b7d3b94ba988757b500278",
    measurementId: "G-2R45S9PNV6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
