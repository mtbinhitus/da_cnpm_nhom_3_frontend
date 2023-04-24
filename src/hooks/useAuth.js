import * as Keycloak from "keycloak-js";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import initKeycloak from "../services/keycloak-service";

const useAuth = () => {
    const isRun = useRef(false);
    const [isLogin, setLogin] = useState(false);
    const [render, setRender] = useState(false);
    const [token, setToken] = useState();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;
        initKeycloak(authContext);
    }, []);
    return [isLogin, token];
};
export default useAuth;
