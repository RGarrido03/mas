import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActorChoosing from './actorChoosing';
import ClientLogin from './client/login';
import PTLogin from './pt/login';

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
    <Router>
      <Routes>
        <Route path="/" element={<ActorChoosing />} />
        <Route path="/client/login" element={<ClientLogin />} />
        <Route path="/pt/login" element={<PTLogin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);