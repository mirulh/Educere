import React, { useContext } from 'react';
import { Store } from '../Store';
import { Navigate, Outlet } from 'react-router-dom';

export default function UserRoute() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  if (userInfo) {
    if (!userInfo.isAdmin) {
      return <Outlet />;
    } else {
      return <Navigate to="/admin/contents" />;
    }
  } else {
    return <Navigate to="/signin" />;
  }
}
