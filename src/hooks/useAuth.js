import Keycloak from "keycloak-js";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
    const isRun = useRef(false);
    const [isLogin, setLogin] = useState(false);
    const [render, setRender] = useState(false);
    const [token, setToken] = useState();
    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;
        const client = new Keycloak({
            url: "http://localhost:8081/",
            realm: "auth-toeic",
            clientId: "spring-keycloak",
        });
        client.init({ onLoad: "login-required" }).then((res) => {
            setLogin(true);
            setToken(client.token);
        });
    }, []);
    return [isLogin, token];
};
export default useAuth;
