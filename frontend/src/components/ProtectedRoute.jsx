import React, { useContext } from 'react';
import { Store } from '../Store';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;

  if (userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" />;
  }
}
