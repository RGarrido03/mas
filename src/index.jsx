import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActorChoosing from './actorChoosing';
import ClientLogin from './client/clientLogin';
import ClientRegister1 from './client/clientRegister1';
import ClientRegister2 from './client/clientRegister2';
import ClientRegister3 from './client/clientRegister3';
import NotFound from './notFound';

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
        <Route path="/client/register/1" element={<ClientRegister1 />} />
        <Route path="/client/register/2" element={<ClientRegister2 />} />
        <Route path="/client/register/3" element={<ClientRegister3 />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);