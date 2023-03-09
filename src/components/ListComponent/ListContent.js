import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import TopExamList from "../HomepageComponent/TopExamList";
import SearchListContent from "./SearchListContent";
import TabContent from "./TabContent";

function ListContent() {
    return (
        <>
            <div>
                <div style={{ backgroundColor: "#f8f9fa", paddingTop: "60px" }}>
                    <SearchListContent />
                    <TabContent />
                </div>
                <div className="pt-5">
                    <TopExamList />
                </div>
                <div>bottom</div>
            </div>
        </>
    );
}

export default ListContent;
