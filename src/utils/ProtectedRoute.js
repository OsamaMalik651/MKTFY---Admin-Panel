import React, { useEffect } from 'react'
import { AuthContext } from 'context/authContext'
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import checkAccessToken from './storage-helper';

const ProtectedRoute = ({ children, ...rest }) => {
    const { loading, authenticated, logout } = useContext(AuthContext);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (authenticated) {
        return children;
    }
    logout();

}

export default ProtectedRoute