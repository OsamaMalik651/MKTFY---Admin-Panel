import React from 'react'
import { AuthContext } from 'context/authContext'
import { Redirect, Route } from 'react-router-dom';
import { useContext } from 'react';
const ProtectedRoute = ({ children, ...rest }) => {
    const { authenticated } = useContext(AuthContext);
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