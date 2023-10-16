import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// FIREBASE STUFF

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjDJtvu0NuE44_Xs2qNZADRJq_lMc9-2c",
  authDomain: "kinguistics-6dd7e.firebaseapp.com",
  projectId: "kinguistics-6dd7e",
  storageBucket: "kinguistics-6dd7e.appspot.com",
  messagingSenderId: "1084695766941",
  appId: "1:1084695766941:web:65e08e8b08f9d4891c3174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
