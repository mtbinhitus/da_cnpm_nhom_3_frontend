import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";

import DropdownButton from "react-bootstrap/DropdownButton";

import { useContext, useEffect, useState } from "react";
import "../style/header.css";

import Keycloak from "keycloak-js";
const Header = () => {
    const authContext = useContext(AuthContext);

    const login = () => {
        const client = new Keycloak({
            url: "http://localhost:8081/",
            realm: "auth-toeic",
            clientId: "spring-keycloak",
        });
        client.init({ onLoad: "login-required" }).then((res) => {
            authContext.addClient(client);
            localStorage.setItem("token", client.token);
        });
    };
    const [tabIndex, setTabIndex] = useState(0);
    const [userName, setUsername] = useState();
    const params = new URLSearchParams(window.location.pathname);
    console.log(params);
    const idToken = localStorage.getItem("id_token");
    const baseUrl = "http://localhost:3000";
    const logoutUrl = `http://localhost:8081/realms/auth-toeic/protocol/openid-connect/logout?post_logout_redirect_uri=${baseUrl}&id_token_hint=${idToken}`;
    const clearStorageAfterLogout = () => {
        localStorage.clear();
    };
    console.log("Header: " + localStorage.getItem("id_token")?.toString());
    useEffect(() => {
        console.log("Header");
        setUsername(localStorage.getItem("username"));
    }, [localStorage.getItem("id_token")]);
    return (
        <>
            <AppBar position="sticky" className="header-container">
                <Toolbar>
                    <Typography className="branch-container">Myapp</Typography>
                    <Tabs
                        onChange={(e, value) => {
                            setTabIndex(value);
                        }}
                        value={tabIndex}
                        className="header-navbar"
                    >
                        <Tab
                            to={"/"}
                            LinkComponent={NavLink}
                            style={{
                                textTransform: "none",
                                fontSize: ".95rem",
                                color: "black",
                                fontWeight: "bold",
                            }}
                            label={"Trang chủ"}
                        ></Tab>

                        <Tab
                            to={"/exams"}
                            LinkComponent={NavLink}
                            style={{ textTransform: "none", fontSize: ".95rem", color: "black", fontWeight: "bold" }}
                            label={"Đề thi"}
                        ></Tab>
                        <Tab
                            style={{ textTransform: "none", fontSize: ".95rem", color: "black", fontWeight: "bold" }}
                            label={"Thống kê"}
                        ></Tab>
                        <Tab
                            style={{ textTransform: "none", fontSize: ".95rem", color: "black", fontWeight: "bold" }}
                            label={"Liên hệ"}
                        ></Tab>
                    </Tabs>
                    <Button className="signin-btn" variant="contained">
                        Đăng nhập
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Header;
