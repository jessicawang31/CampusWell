import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/analytics';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3CaYRbFP7Hkq-KYvurIBFVK9ZQ6MHZB8",
  authDomain: "campus-well.firebaseapp.com",
  projectId: "campus-well",
  storageBucket: "campus-well.appspot.com",
  messagingSenderId: "802980392745",
  appId: "1:802980392745:web:ba1e5c56caaeb0fca2d138",
  measurementId: "G-7ERLYN9RBC"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);