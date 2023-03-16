import { Card } from "@mui/material";
import React from "react";
import CarouselContent from "./CarouselContent";
import TopExamList from "./TopExamList";

function HomepageContent() {
    return (
        <>
            <CarouselContent />
            <Card style={{ padding: "16px" }}>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "16px", fontWeight: "500", textAlign: "center" }}>
                    Đề thi mới nhất
                </h2>
                <div>
                    <TopExamList />
                </div>
            </Card>
        </>
    );
}

export default HomepageContent;
