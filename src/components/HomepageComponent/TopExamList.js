import { Grid } from "@mui/material";
import { React, useEffect, useState } from "react";
import ExamCard from "../ExamCard";
import { getListExam } from "../../services/ExamService";

function TopExamList() {
    const accessToken = localStorage.getItem("token");
    const [exams, setExams] = useState();
    useEffect(() => {
        console.log(accessToken);

        getListExam(accessToken).then((res) => {
            setExams(res.body);
            console.log("TopExamList");
            console.log(res.body);
        });
    }, []);

    const props = [
        {
            name: "TOEIC test 1",
            category: "New academy",
            min: 40,
            joined: 1234,
            cmt: 10,
            part: 7,
            question: 120,
        },
        {
            name: "TOEIC test 12",
            category: "New academy",
            min: 40,
            joined: 5675,
            cmt: 45,
            part: 7,
            question: 120,
        },
        {
            name: "TOEIC test 14",
            category: "New academy",
            min: 40,
            joined: 1234,
            cmt: 10,
            part: 7,
            question: 120,
        },
        {
            name: "TOEIC test 45",
            category: "New academy",
            min: 40,
            joined: 1234,
            cmt: 10,
            part: 7,
            question: 120,
        },
        {
            name: "TOEIC test 6",
            category: "New academy",
            min: 40,
            joined: 1234,
            cmt: 10,
            part: 7,
            question: 120,
        },
        {
            name: "TOEIC test 10",
            category: "New academy",
            min: 40,
            joined: 1234,
            cmt: 10,
            part: 7,
            question: 120,
        },
    ];
    if (exams === undefined) return <p>Loading...</p>;
    return (
        <>
            <Grid container spacing={2}>
                {props.map((value, index) => (
                    <Grid xs={3} item key={index}>
                        <ExamCard name={value.name} category={value.category} joined={value.joined} cmt={value.cmt} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default TopExamList;
