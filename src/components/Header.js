import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";
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
                            title={authContext.auth.idTokenParsed.preferred_username}
                        >
                            <NavDropdown.Item
                                onClick={(e) => {
                                    authContext.auth.logout({ redirectUri: "http://localhost:3000/" });
                                }}
                                // href={logoutUrl}
                            >
                                log out
                            </NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <Button
                            className="signin-btn"
                            variant="contained"
                            onClick={(e) => {
                                login();
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
