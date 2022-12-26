import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActorChoosing from './actorChoosing';
import NotFound from './notFound';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Client with Premium plan
import ClientHome from './client/clientHome';
import ClientExercise from './client/clientExercise';
import ClientExerciseClasses from './client/clientExerciseClasses';
import ClientExercisePlan from './client/clientExerciseChangePlan';
import ClientExerciseVideocall from './client/clientExerciseVideocall';
import ClientMeasures from './client/clientMeasures';
import ClientMeasuresChange from './client/clientMeasuresChange';
import ClientMessageVideocall from './client/clientMessageVideocall';
import ClientMessageVideocallRequest from './client/clientMessageVideocallRequest';
import ClientMessages from './client/clientMessages';
import ClientMessageHistory from './client/clientMessageHistory';
import ClientNutrition from './client/clientNutrition';
import ClientNutritionChangePlan from './client/clientNutritionChangePlan';
import ClientLogin from './client/clientLogin';
import ClientRegister1 from './client/clientRegister1';
import ClientRegister2 from './client/clientRegister2';
import ClientRegister3 from './client/clientRegister3';
import ClientRegister4 from './client/clientRegister4';
import ClientWaitingForPT from './client/clientWaitingForPT';
import ClientSubscription from './client/clientSubscription';
import ClientProfile from './client/clientProfile';

// Client with Standard plan. It is equal to Premium plan, but with no nutrition. "standard" is added to the file path.
import ClientStandardHome from './client-standard/clientStandardHome';
import ClientStandardExercise from './client-standard/clientStandardExercise';
import ClientStandardExerciseClasses from './client-standard/clientStandardExerciseClasses';
import ClientStandardExerciseChangePlan from './client-standard/clientStandardExerciseChangePlan';
import ClientStandardExerciseVideocall from './client-standard/clientStandardExerciseVideocall';
import ClientStandardMeasures from './client-standard/clientStandardMeasures';
import ClientStandardMeasuresChange from './client-standard/clientStandardMeasuresChange';
import ClientStandardMessageVideocall from './client-standard/clientStandardMessageVideocall';
import ClientStandardMessageVideocallRequest from './client-standard/clientStandardMessageVideocallRequest';
import ClientStandardMessages from './client-standard/clientStandardMessages';
import ClientStandardMessageHistory from './client-standard/clientStandardMessageHistory';
import ClientStandardLogin from './client-standard/clientStandardLogin';
import ClientStandardRegister1 from './client-standard/clientStandardRegister1';
import ClientStandardRegister2 from './client-standard/clientStandardRegister2';
import ClientStandardRegister3 from './client-standard/clientStandardRegister3';
import ClientStandardRegister4 from './client-standard/clientStandardRegister4';
import ClientStandardWaitingForPT from './client-standard/clientStandardWaitingForPT';
import ClientStandardSubscription from './client-standard/clientStandardSubscription';
import ClientStandardProfile from './client-standard/clientStandardProfile';

// Client with Basic plan
import ClientBasicExercise from './client-basic/clientBasicExercise';
import ClientBasicExerciseChangePlan from './client-basic/clientBasicExerciseChangePlan';
import ClientBasicHome from './client-basic/clientBasicHome';
import ClientBasicLogin from './client-basic/clientBasicLogin';
import ClientBasicMeasures from './client-basic/clientBasicMeasures';
import ClientBasicMeasuresChange from './client-basic/clientBasicMeasuresChange';
import ClientBasicProfile from './client-basic/clientBasicProfile';
import ClientBasicRegister1 from './client-basic/clientBasicRegister1';
import ClientBasicRegister2 from './client-basic/clientBasicRegister2';
import ClientBasicRegister3 from './client-basic/clientBasicRegister3';
import ClientBasicRegister4 from './client-basic/clientBasicRegister4';
import ClientBasicSubscription from './client-basic/clientBasicSubscription';

// Personal Trainer
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
import PTUserDetailsMeasures from './pt/PTUserDetailsMeasures';
import PTUserDetailsNutrition from './pt/PTUserDetailsNutrition';
import PTUserDetailsChangePlan from './pt/PTUserDetailsChangePlan';
import PTProfile from './pt/PTProfile';

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
        <Route path="*" element={<NotFound />} />

        {/* Client with Premium plan */}
        <Route path="/client/home" element={<ClientHome />} />
        <Route path="/client/exercise" element={<ClientExercise />} />
        <Route path="/client/exercise/extraclasses" element={<ClientExerciseClasses />} />
        <Route path="/client/exercise/changeplan" element={<ClientExercisePlan />} />
        <Route path="/client/exercise/videocall" element={<ClientExerciseVideocall />} />
        <Route path="/client/measures" element={<ClientMeasures />} />
        <Route path="/client/measures/change" element={<ClientMeasuresChange />} />
        <Route path="/client/messages" element={<ClientMessages />} />
        <Route path="/client/messages/history" element={<ClientMessageHistory />} />
        <Route path="/client/messages/videocall" element={<ClientMessageVideocall />} />
        <Route path="/client/messages/videocall/request" element={<ClientMessageVideocallRequest />} />
        <Route path="/client/nutrition" element={<ClientNutrition />} />
        <Route path="/client/nutrition/changeplan" element={<ClientNutritionChangePlan />} />
        <Route path="/client/login" element={<ClientLogin />} />
        <Route path="/client/register/1" element={<ClientRegister1 />} />
        <Route path="/client/register/2" element={<ClientRegister2 />} />
        <Route path="/client/register/3" element={<ClientRegister3 />} />
        <Route path="/client/register/4" element={<ClientRegister4 />} />
        <Route path="/client/waiting-for-pt" element={<ClientWaitingForPT />} />
        <Route path="/client/subscription" element={<ClientSubscription />} />
        <Route path="/client/profile" element={<ClientProfile />} />

        {/* Client with Standard plan */}
        <Route path="/client-standard/home" element={<ClientStandardHome />} />
        <Route path="/client-standard/exercise" element={<ClientStandardExercise />} />
        <Route path="/client-standard/exercise/extraclasses" element={<ClientStandardExerciseClasses />} />
        <Route path="/client-standard/exercise/changeplan" element={<ClientStandardExerciseChangePlan />} />
        <Route path="/client-standard/exercise/videocall" element={<ClientStandardExerciseVideocall />} />
        <Route path="/client-standard/measures" element={<ClientStandardMeasures />} />
        <Route path="/client-standard/measures/change" element={<ClientStandardMeasuresChange />} />
        <Route path="/client-standard/messages" element={<ClientStandardMessages />} />
        <Route path="/client-standard/messages/history" element={<ClientStandardMessageHistory />} />
        <Route path="/client-standard/messages/videocall" element={<ClientStandardMessageVideocall />} />
        <Route path="/client-standard/messages/videocall/request" element={<ClientStandardMessageVideocallRequest />} />
        <Route path="/client-standard/login" element={<ClientStandardLogin />} />
        <Route path="/client-standard/register/1" element={<ClientStandardRegister1 />} />
        <Route path="/client-standard/register/2" element={<ClientStandardRegister2 />} />
        <Route path="/client-standard/register/3" element={<ClientStandardRegister3 />} />
        <Route path="/client-standard/register/4" element={<ClientStandardRegister4 />} />
        <Route path="/client-standard/waiting-for-pt" element={<ClientStandardWaitingForPT />} />
        <Route path="/client-standard/subscription" element={<ClientStandardSubscription />} />
        <Route path="/client-standard/profile" element={<ClientStandardProfile />} />

        {/* Client with Basic plan */}
        <Route path="/client-basic/home" element={<ClientBasicHome />} />
        <Route path="/client-basic/exercise" element={<ClientBasicExercise />} />
        <Route path="/client-basic/exercise/changeplan" element={<ClientBasicExerciseChangePlan />} />
        <Route path="/client-basic/measures" element={<ClientBasicMeasures />} />
        <Route path="/client-basic/measures/change" element={<ClientBasicMeasuresChange />} />
        <Route path="/client-basic/login" element={<ClientBasicLogin />} />
        <Route path="/client-basic/register/1" element={<ClientBasicRegister1 />} />
        <Route path="/client-basic/register/2" element={<ClientBasicRegister2 />} />
        <Route path="/client-basic/register/3" element={<ClientBasicRegister3 />} />
        <Route path="/client-basic/register/4" element={<ClientBasicRegister4 />} />
        <Route path="/client-basic/subscription" element={<ClientBasicSubscription />} />
        <Route path="/client-basic/profile" element={<ClientBasicProfile />} />

        {/* Personal Trainer */}
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
        <Route path="/pt/users/details/measures" element={<PTUserDetailsMeasures />} />
        <Route path="/pt/users/details/nutrition" element={<PTUserDetailsNutrition />} />
        <Route path="/pt/users/details/changeplan" element={<PTUserDetailsChangePlan />} />
        <Route path="/pt/profile" element={<PTProfile />} />        
      </Routes>
    </Router>
  </React.StrictMode>
);