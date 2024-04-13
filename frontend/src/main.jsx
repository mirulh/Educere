import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import TestData from './TestData';
import SigninScreen from './screens/SigninScreen.jsx';
import { HelmetProvider } from 'react-helmet-async';
import SignupScreen from './screens/SignupScreen.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ProfileScreen from './screens/ProfileScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import StoreProvider from './Store.jsx';

// axios.defaults.baseURL = 'http://localhost:5000';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomeScreen />} />
      <Route path="test" element={<TestData />} />
      <Route path="/signin" element={<SigninScreen />}></Route>
      <Route path="/signup" element={<SignupScreen />}></Route>
      <Route path="/profile" element={<ProfileScreen />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </HelmetProvider>
  </React.StrictMode>
);
