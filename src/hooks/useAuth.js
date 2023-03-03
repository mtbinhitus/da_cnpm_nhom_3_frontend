import { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
    const isRun = useRef(false);
    const [isLogin, setLogin] = useState(false);
    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;
        const client = new Keycloak({
            url: "http://localhost:8081/",
            realm: "auth-toeic",
            clientId: "spring-keycloak",
        });
        client.init({ onLoad: "login-required" }).then((res) => {
            console.log(client.token);
            setLogin(true);
        });
    }, []);
    return isLogin;
};
export default useAuth;
