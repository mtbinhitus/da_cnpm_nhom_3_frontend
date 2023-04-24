import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";

import DropdownButton from "react-bootstrap/DropdownButton";

import { useContext, useEffect, useRef, useState } from "react";
import "../style/header.css";

import Keycloak from "keycloak-js";
import initKeycloak from "../services/keycloak-service";
const Header = () => {
    const isRun = useRef(false);
    const authContext = useContext(AuthContext);
    const [render, setRender] = useState(false);
    const [loginFlag, setLoginFlag] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const [userName, setUsername] = useState();
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.pathname);
    console.log(params);
    const idToken = localStorage.getItem("id_token");
    const baseUrl = "http://localhost:3000/";
    const clearStorageAfterLogout = () => {
        localStorage.clear();
    };

    const login = () => {
        // if (isRun.current) return;
        // isRun.current = true;
        initKeycloak(authContext);
        // const client = new Keycloak({
        //     url: "http://localhost:8081/",
        //     realm: "auth-toeic",
        //     clientId: "spring-keycloak",
        // });
        // client.init({ onLoad: "login-required" }).then((res) => {
        //     authContext.addClient(client);
        //     localStorage.setItem("token", client.token);
        // });
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
                    {authContext.auth?.authenticated ? (
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            style={{ color: "black", marginLeft: "5px" }}
                            title={authContext.auth.idTokenParsed.name}
                        >
                            {authContext.auth?.tokenParsed.realm_access.roles.includes("admin") ? (
                                <NavDropdown.Item
                                    onClick={(e) => {
                                        navigate("/admin/exams", {
                                            state: {
                                                isAdmin: true,
                                            },
                                        });
                                    }}
                                    // href={logoutUrl}
                                >
                                    Tạo đề thi
                                </NavDropdown.Item>
                            ) : (
                                <div></div>
                            )}

                            <NavDropdown.Item
                                onClick={(e) => {
                                    authContext.auth.logout({ redirectUri: baseUrl });
                                    // authContext.auth.logout();
                                }}
                                // href={logoutUrl}
                            >
                                Đăng xuất
                            </NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <Button
                            className="signin-btn"
                            variant="contained"
                            onClick={(e) => {
                                // setLoginFlag(!loginFlag);
                                // login();
                                navigate("/exams");
                            }}
                        >
                            Đăng nhập
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Header;
