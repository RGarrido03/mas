import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActorChoosing from './actorChoosing';
import ClientHome from './client/clientHome';
import ClientExercise from './client/clientExercise';
import ClientExerciseClasses from './client/clientExerciseClasses';
import ClientExercisePlan from './client/clientExerciseChangePlan';
import ClientExerciseVideocall from './client/clientExerciseVideocall';
import ClientMessageVideocall from './client/clientMessageVideocall';
import ClientMessageVideocallRequest from './client/clientMessageVideocallRequest';
import ClientMessages from './client/clientMessages';
import ClientMessageHistory from './client/clientMessageHistory';
import ClientNutrition from './client/clientNutrition';
import ClientLogin from './client/clientLogin';
import ClientRegister1 from './client/clientRegister1';
import ClientRegister2 from './client/clientRegister2';
import ClientRegister3 from './client/clientRegister3';
import ClientRegister4 from './client/clientRegister4';
import ClientWaitingForPT from './client/clientWaitingForPT';
import ClientSubscription from './client/clientSubscription';
import ClientProfile from './client/clientProfile';
import PTHome from './pt/PTHome';
import PTLogin from './pt/PTLogin';
import PTClasses from './pt/PTClasses';
import PTClassesExtra from './pt/PTClassesExtra';
import PTClassesVideocall from './pt/PTClassesVideocall';
import PTMessages from './pt/PTMessages';
import PTMessageHistory from './pt/PTMessageHistory';
import PTMessageVideocall from './pt/PTMessageVideocall';
import PTRegister from './pt/PTRegister';
import PTUsers from './pt/PTUsers';
import PTUsersWaiting from './pt/PTUsersWaiting';
import PTUserDetails from './pt/PTUserDetails';
import PTUserDetailsChangePlan from './pt/PTUserDetailsChangePlan';
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
    <Router basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route path="/" element={<ActorChoosing />} />
        <Route path="/client/home" element={<ClientHome />} />
        <Route path="/client/exercise" element={<ClientExercise />} />
        <Route path="/client/exercise/extraclasses" element={<ClientExerciseClasses />} />
        <Route path="/client/exercise/changeplan" element={<ClientExercisePlan />} />
        <Route path="/client/exercise/videocall" element={<ClientExerciseVideocall />} />
        <Route path="/client/messages" element={<ClientMessages />} />
        <Route path="/client/messages/history" element={<ClientMessageHistory />} />
        <Route path="/client/messages/videocall" element={<ClientMessageVideocall />} />
        <Route path="/client/messages/videocall/request" element={<ClientMessageVideocallRequest />} />
        <Route path="/client/nutrition" element={<ClientNutrition />} />
        <Route path="/client/login" element={<ClientLogin />} />
        <Route path="/client/register/1" element={<ClientRegister1 />} />
        <Route path="/client/register/2" element={<ClientRegister2 />} />
        <Route path="/client/register/3" element={<ClientRegister3 />} />
        <Route path="/client/register/4" element={<ClientRegister4 />} />
        <Route path="/client/waiting-for-pt" element={<ClientWaitingForPT />} />
        <Route path="/client/subscription" element={<ClientSubscription />} />
        <Route path="/client/profile" element={<ClientProfile />} />
        <Route path="/pt/home" element={<PTHome />} />
        <Route path="/pt/classes" element={<PTClasses />} />
        <Route path="/pt/classes/extraclasses" element={<PTClassesExtra />} />
        <Route path="/pt/classes/videocall" element={<PTClassesVideocall />} />
        <Route path="/pt/messages" element={<PTMessages />} />
        <Route path="/pt/messages/history" element={<PTMessageHistory />} />
        <Route path="/pt/messages/videocall" element={<PTMessageVideocall />} />
        <Route path="/pt/login" element={<PTLogin />} />
        <Route path="/pt/register" element={<PTRegister />} />
        <Route path="/pt/users" element={<PTUsers />} />
        <Route path="/pt/users/waiting" element={<PTUsersWaiting />} />
        <Route path="/pt/users/details" element={<PTUserDetails />} />
        <Route path="/pt/users/details/changeplan" element={<PTUserDetailsChangePlan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);