import { Grid } from "@mui/material";
<<<<<<< Updated upstream
import React from "react";
import ExamCard from "../ExamCard";

function TopExamList() {
=======
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

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
    if (exams === undefined) return <p>Loading...</p>;
>>>>>>> Stashed changes
    return (
        <>
            <Grid container spacing={2}>
                {props.map((value, index) => (
                    <Grid xs={3} item key={index}>
<<<<<<< Updated upstream
                        <ExamCard name={value.name} category={value.category} joined={value.joined} cmt={value.cmt} />
=======
                        <ExamCard className={value.name} category="New academy" joined="1234" cmt="10" id={value.id} />
>>>>>>> Stashed changes
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default TopExamList;
