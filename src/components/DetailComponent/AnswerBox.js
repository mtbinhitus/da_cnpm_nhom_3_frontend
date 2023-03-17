import { React, useState } from "react";
import { Box, Stack, Tabs, Tab, Typography, Button ,Grid} from "@mui/material";
import CountDown from "./CountDown";
import ExamPart from "./ExamPart";
import { Link } from "react-router-dom";

export default function AnswerBox(props) {
    const examId = 1;
    const examResultId = 1;
    if (props.listExam === undefined) return <p>Loading...</p>;
    return (
        <>
            <Stack justifyContent="center" textAlign="center" spacing={2}>
                <CountDown />
                <Link to={`/exam-detail/${examId}/results/${examResultId}`} style={{ textDecoration: "none" }}>
                    <Button sx={{ bgcolor: "#e8f2ff" }} size="small" variant="outlined">
                        Nộp bài
                    </Button>
                </Link>
                <Typography color={"#ffad3b"} variant="subtitle2">
                    Chú ý: bạn có thể click vào số thứ tự câu hỏi trong bài để đánh dấu review
                </Typography>
                    <Stack justifyContent="center" spacing={2}>
                        <Grid container justifyContent="flex-start" spacing={0.5}>
                            {props.listExam.map((value, index) => (
                                <Grid key={index} xs={2.4} item> 
                                    <Button variant="outlined" sx={{minWidth: "28px", height: "25px", width: "28px"}}>
                                        {index+1}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
            </Stack>
        </>
    );
}
