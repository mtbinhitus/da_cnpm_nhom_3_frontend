import { Button, Stack, Typography } from "@mui/material";
import { React } from "react";
import CountDown from "./CountDown";
import ExamPart from "./ExamPart";
import { Link } from "react-router-dom";

export default function AnswerBox(props) {
    console.log(props.listPart);
    const examId = 1;
    const examResultId = 1;
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
                {props.listPart.map((value, index) => (
                    <ExamPart key={index} part={value} />
                ))}
            </Stack>
        </>
    );
}
