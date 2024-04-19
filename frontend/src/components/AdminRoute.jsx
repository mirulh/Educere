import React, { useContext } from 'react';
import { Store } from '../Store';
import { Navigate, Outlet } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;

  if (userInfo && userInfo.isAdmin) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" />;
  }
}
