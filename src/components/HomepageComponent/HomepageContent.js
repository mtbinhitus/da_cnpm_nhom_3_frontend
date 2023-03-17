import { Card } from "@mui/material";
import { React, useEffect , useState } from "react";
import CarouselContent from "./CarouselContent";
import TopExamList from "./TopExamList";
import {
    getTopListExam,
} from "../../services/ExamService";

function HomepageContent() {

    const [exams, setExams] = useState();
    
    useEffect(() => {
        getTopListExam().then((res) => {
            setExams(res.body);
            console.log("HomepageContent")
            console.log(res.body)
        });
    }, []);

    if (exams === undefined) return <p>Loading...</p>;
    return (
        <>
            <CarouselContent />
            <Card style={{ padding: "16px" }}>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "16px", fontWeight: "500", textAlign: "center" }}>
                    Đề thi mới nhất
                </h2>
                <div>
                    <TopExamList exams={exams} />
                </div>
            </Card>
        </>
    );
}

export default HomepageContent;
