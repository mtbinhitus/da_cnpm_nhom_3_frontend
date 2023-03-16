import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

function TabContent() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Tabs
                onChange={(e, value) => {
                    setTabIndex(value);
                    console.log(e.target.value);
                }}
                value={tabIndex}
                className="header-navbar container"
            >
                <Tab
                    style={{ textTransform: "none", fontSize: ".95rem", color: "black", fontWeight: "bold" }}
                    label={"Tất cả"}
                ></Tab>
                <Tab
                    style={{ textTransform: "none", fontSize: ".95rem", color: "black", fontWeight: "bold" }}
                    label={"Bộ đề thi"}
                ></Tab>
                <Tab
                    style={{ textTransform: "none", fontSize: ".95rem", color: "black", fontWeight: "bold" }}
                    label={"Đề thi rút gọn"}
                ></Tab>
            </Tabs>
        </div>
    );
}

export default TabContent;
