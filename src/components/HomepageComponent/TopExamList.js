import { Grid } from "@mui/material";
import React from "react";
import ExamCard from "../ExamCard";

function TopExamList() {
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
