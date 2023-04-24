import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import initKeycloak from '../services/keycloakService';

const useAuth = () => {
    const isRun = useRef(false);
    const isLogin = useState(false);
    const token= useState();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;
        initKeycloak(authContext);
    }, []);
    return [isLogin, token];
};
export default useAuth;
