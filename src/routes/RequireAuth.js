import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ children }) => {
    const authContext = useContext(AuthContext);
    useAuth();
    console.log(authContext.auth);
    return authContext.auth?.authenticated ? children : <div></div>;
};
export default RequireAuth;
