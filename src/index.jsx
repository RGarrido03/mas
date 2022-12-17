import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActorChoosing from './actorChoosing';
import ClientHome from './client/clientHome';
import ClientExercise from './client/clientExercise';
import ClientExerciseClasses from './client/clientExerciseClasses';
import ClientExercisePlan from './client/clientExerciseChangePlan';
import ClientMessages from './client/clientMessages';
import ClientLogin from './client/clientLogin';
import ClientRegister1 from './client/clientRegister1';
import ClientRegister2 from './client/clientRegister2';
import ClientRegister3 from './client/clientRegister3';
import ClientRegister4 from './client/clientRegister4';
import PTLogin from './pt/PTLogin';
import PTRegister from './pt/PTRegister';
import NotFound from './notFound';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Custom CSS
import './css/animation.css';
import './css/colors.css';
import './css/fonts.css';
import './css/misc.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Fitness Hut</title>
        <meta name="theme-color" content="#0066CC" />
      </Helmet>
    </HelmetProvider>
    <Router basename='/mas'> {/* basename='/mas' is for GitHub Pages */}
      <Routes>
        <Route path="/" element={<ActorChoosing />} />
        <Route path="/client/home" element={<ClientHome />} />
        <Route path="/client/exercise" element={<ClientExercise />} />
        <Route path="/client/exercise/extraclasses" element={<ClientExerciseClasses />} />
        <Route path="/client/exercise/changeplan" element={<ClientExercisePlan />} />
        <Route path="/client/messages" element={<ClientMessages />} />
        <Route path="/client/login" element={<ClientLogin />} />
        <Route path="/client/register/1" element={<ClientRegister1 />} />
        <Route path="/client/register/2" element={<ClientRegister2 />} />
        <Route path="/client/register/3" element={<ClientRegister3 />} />
        <Route path="/client/register/4" element={<ClientRegister4 />} />
        <Route path="/pt/login" element={<PTLogin />} />
        <Route path="/pt/register" element={<PTRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);