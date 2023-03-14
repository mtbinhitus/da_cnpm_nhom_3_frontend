import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import "../style/header.css";
const Header = () => {
    const [tabIndex, setTabIndex] = useState(0);
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
