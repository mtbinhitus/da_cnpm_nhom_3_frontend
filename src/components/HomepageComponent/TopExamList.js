import { Grid } from "@mui/material";
import { React, useEffect , useState } from "react";
import ExamCard from "../ExamCard";
import {
    getListExam,
} from "../../services/ExamService";

function TopExamList(props) {



    if(props.exams === undefined) return <p>Loading...</p>;
    return (
        <>
            <Grid container spacing={2}>
                {props.exams.map((value, index) => (
                    <Grid xs={3} item key={index}>
                        <ExamCard name={value.name} category="New academy" joined="1234" cmt="10" id={value.id}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default TopExamList;
