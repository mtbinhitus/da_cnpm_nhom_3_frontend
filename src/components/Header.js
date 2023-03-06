import { AppBar, Tabs, Toolbar, Typography, Tab, Button } from "@mui/material";
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
                        <Tab index={0} label={"Đề thi"}></Tab>
                        <Tab index={1} label={"Liên hệ"}></Tab>
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
