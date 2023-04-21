import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import * as Keycloak from "keycloak-js";

const initKeycloak = (authContext) => {
    let initOptions = {
        url: "https://19127017.smolbee.link/auth/",
        realm: "TestToeic",
        clientId: "login-app",
        onLoad: "login-required",
    };
    const client = Keycloak(initOptions);
    console.log(client);
    if (authContext.auth === null) {
        // client.init({ onLoad: "login-required" }).then((res) => {
        //     setLogin(true);
        //     setToken(client.token);
        //     authContext.addClient(client);
        // });
        client
            .init({ onLoad: initOptions.onLoad })
            .success((auth) => {
                if (!auth) {
                    window.location.reload();
                } else {
                    console.info("Authenticated");
                }

                localStorage.setItem("bearer-token", client.token);
                localStorage.setItem("refresh-token", client.refreshToken);
                localStorage.setItem("token", client.token);

                authContext.addClient(client);

                console.log(client.token);

                setInterval(() => {
                    client
                        .updateToken(70)
                        .success((refreshed) => {
                            if (refreshed) {
                                console.debug("Token refreshed" + refreshed);
                            } else {
                                console.warn(
                                    "Token not refreshed, valid for " +
                                        Math.round(
                                            client.tokenParsed.exp + client.timeSkew - new Date().getTime() / 1000,
                                        ) +
                                        " seconds",
                                );
                            }
                        })
                        .error(() => {
                            console.error("Failed to refresh token");
                        });
                }, 60000);
            })
            .error(() => {
                console.error("Authenticated Failed");
            });
    }
};
export default initKeycloak;
