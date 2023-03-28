import { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
    const refreshThreshold = 5 * 60 * 1000;
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
        {
            if (localStorage.getItem("token")) {
                client.init({onLoad: "check-sso"}).then(
                    authenticated => {
                        if (authenticated) {
                            localStorage.setItem("token", client.token);
                            setInterval(async () => {
                                const refreshed= await client.updateToken(60);
                                if(refreshed){
                                    const newToken = client.token;
                                    setToken(newToken);
                                    localStorage.setItem("token", newToken);
                                }
                            }, 30000); // check every 10 seconds
                        }
                    }
                )
                setLogin(true);
            } else {
                client.init({onLoad: "login-required"}).then((res) => {
                    localStorage.setItem("username", client.idTokenParsed.preferred_username)
                    localStorage.setItem("id_token", client.idToken)
                    setLogin(true);
                    localStorage.setItem("token", client.token);
                    setToken(client.token);

                });
            }

        }
    }, [render]);
    return [isLogin, token];
};
export default useAuth;
