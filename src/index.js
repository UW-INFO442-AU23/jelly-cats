import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import "./components/App/App.js";
import "whatwg-fetch";
import "./index.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjDJtvu0NuE44_Xs2qNZADRJq_lMc9-2c",
  authDomain: "kinguistics-6dd7e.firebaseapp.com",
  projectId: "kinguistics-6dd7e",
  storageBucket: "kinguistics-6dd7e.appspot.com",
  messagingSenderId: "1084695766941",
  appId: "1:1084695766941:web:65e08e8b08f9d4891c3174",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
