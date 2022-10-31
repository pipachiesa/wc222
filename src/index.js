import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsz4UYUrcLwplStqGxAdwN0TYGF50ZZns",
    authDomain: "coderhouse-ecommerce-a22fa.firebaseapp.com",
    projectId: "coderhouse-ecommerce-a22fa",
    storageBucket: "coderhouse-ecommerce-a22fa.appspot.com",
    messagingSenderId: "761367824914",
    appId: "1:761367824914:web:15e44e98d149be384326cb"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);

