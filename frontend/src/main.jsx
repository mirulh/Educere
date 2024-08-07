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
import { StoreProvider } from './Store.jsx'; //[1]
import UserListScreen from './screens/UserListScreen.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import SearchScreen from './screens/SearchScreen.jsx';
import UserEditScreen from './screens/UserEditScreen.jsx';
import ContentListScreen from './screens/ContentListScreen.jsx';
import ContentEditScreen from './screens/ContentEditScreen.jsx';
import SubmissionScreen from './screens/SubmissionScreen.jsx';
import UserRoute from './components/UserRoute.jsx';
import SubmissionListScreen from './screens/SubmissionListScreen.jsx';
import SubmissionEditScreen from './screens/SubmissionEditScreen.jsx';
import ContentScreen from './screens/ContentScreen.jsx';
import SavedScreen from './screens/SavedScreen.jsx';
import DashboardScreen from './screens/DashboardScreen.jsx';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen.jsx';
import ResetPasswordScreen from './screens/ResetPasswordScreen.jsx';

// axios.defaults.baseURL = 'http://localhost:5000';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomeScreen />} />
      <Route path="test" element={<TestData />} />
      <Route path="/signin" element={<SigninScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/forget-password" element={<ForgetPasswordScreen />} />
      <Route path="/reset-password/:token" element={<ResetPasswordScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/content/:slug" element={<ContentScreen />} />

      {/* Protected Route */}
      <Route path="" element={<ProtectedRoute />}>
        <Route path="/profile" element={<ProfileScreen />}></Route>
        <Route path="/saved" element={<SavedScreen />}></Route>
      </Route>

      {/* Path for users only */}
      <Route path="" element={<UserRoute />}>
        <Route path="/submit-content" element={<SubmissionScreen />}></Route>
      </Route>

      {/* Admin Route */}
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/dashboard" element={<DashboardScreen />}></Route>
        <Route path="/admin/users" element={<UserListScreen />}></Route>
        <Route path="/admin/user/:id" element={<UserEditScreen />}></Route>
        <Route path="/admin/contents" element={<ContentListScreen />}></Route>
        <Route
          path="/admin/content/:id"
          element={<ContentEditScreen />}
        ></Route>
        <Route
          path="/admin/submissions"
          element={<SubmissionListScreen />}
        ></Route>
        <Route
          path="/admin/submission/:id"
          element={<SubmissionEditScreen />}
        ></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <HelmetProvider>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </HelmetProvider>
  // </React.StrictMode>
);

/* 

references

[1] export function vs export default function

if you have multiple export in a file use export function. If single export, then use export default

export function are named export: 

import { StoreProvider } from './Store.jsx';

 ^- needs to differentiate since multiple export in a single module

export default are default export 

import StoreProvider from './Store.jsx';

^- does not require braces since only one export from module

*/
