import React, { useEffect } from 'react'
import { AuthContext } from 'context/authContext'
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import checkAccessToken from './storage-helper';

const ProtectedRoute = ({ children, ...rest }) => {
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    let accessToken = checkAccessToken();

    React.useEffect(() => {
        if (accessToken) {
            setAuthenticated(true);
        }
        else {
            setAuthenticated(false);
        }
    }, [accessToken]);
    return (
        <Route {...rest} render={({ location }) => {
            return authenticated === true
                ? children
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: location }
                }} />
        }} />
    )
}

export default ProtectedRoute