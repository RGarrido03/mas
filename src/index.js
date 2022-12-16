import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './navbar/navbarClient';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Custom CSS
import './css/animation.css';
import './css/colors.css';
import './css/fonts.css';
import './css/misc.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
