import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink , Link} from "react-router-dom";
import { useState, useEffect } from "react";

import "../style/header.css";
const Header = () => {
    const [tabIndex, setTabIndex] = useState(0);
    let userInfo = JSON.parse(localStorage.getItem("currentUser"));
    useEffect(()=>{
        console.log(JSON.parse(localStorage.getItem("currentUser")))
        userInfo = JSON.parse(localStorage.getItem("currentUser"));
    },[JSON.parse(localStorage.getItem("currentUser"))])

    return (
        <>
            <AppBar position="sticky" className="header-container">
                <Toolbar>
                    <Typography className="branch-container">Myapp</Typography>
                    <Tabs
                        onChange={(e, value) => {
                            setTabIndex(value);
                            console.log(e.target.value);
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
                    {
                        userInfo == null?
                        <Link to={`/login`} style={{ textDecoration: "none" }}>
                            <Button className="signin-btn" variant="contained" >
                                Đăng nhập
                            </Button>
                        </Link>

                        :
                        <Button className="signin-btn" variant="contained" >
                            {userInfo.name}
                        </Button>
                    }
                
                 
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Header;
