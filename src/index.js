import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYY0hpnSJ5MzZVGlqa-fSuHyFLg7o_Ev4",
  authDomain: "coder-react-c48db.firebaseapp.com",
  projectId: "coder-react-c48db",
  storageBucket: "coder-react-c48db.appspot.com",
  messagingSenderId: "505339834888",
  appId: "1:505339834888:web:600d1d1344b7ec7f2317bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);