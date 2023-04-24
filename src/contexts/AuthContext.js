import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    const addClient = (client) => {
        setAuth(client);
    };
    const value = {
        auth,
        addClient,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
