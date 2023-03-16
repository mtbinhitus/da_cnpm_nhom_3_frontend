import { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
    const isRun = useRef(false);
    const [isLogin, setLogin] = useState(false);
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
