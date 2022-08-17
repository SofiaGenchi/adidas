import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJJpUJcsUQyZ1Zg8-Kd2r0RDbQHKOURqE",
  authDomain: "adidas-store-sg.firebaseapp.com",
  projectId: "adidas-store-sg",
  storageBucket: "adidas-store-sg.appspot.com",
  messagingSenderId: "751262117841",
  appId: "1:751262117841:web:b1c16e872144b9f0a7baf0"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
