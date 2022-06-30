import React from 'react'
import { Route, Navigate } from 'react-router-dom'

const PrivateRoute = ({ isOpen, setIsOpen, auth, children }) => {
    if (!auth) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };

export default PrivateRoute;