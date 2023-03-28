import { Button, Grid, Stack, Typography } from "@mui/material";
import { React } from "react";
import { Link } from "react-router-dom";
import AnswerBox from "../DetailComponent/AnswerBox";
import Question from "./Question";

export default function DetailContent(props) {

    if (props.listExam === undefined) return <p>Loading...</p>;
    return (
        <>
            <Grid container spacing={2} mt={4}>
                <Grid p={2} item xs={12} mb={2}>
                    <Stack mb={0.5} justifyContent="center" spacing={2} direction="row">
                        <Typography fontWeight={500} textAlign="center" variant="h5">
                            {props.exam.examName}
                        </Typography>

                        <Link to={`../`} style={{ textDecoration: "none" }}>
                            <Button sx={{ bgcolor: "#e8f2ff" }} size="small" variant="outlined">
                                Thoát
                            </Button>
                        </Link>
                    </Stack>
                    <Typography textAlign="center" variant="h6">
                        Bộ đề thi: {props.exam.examCol}
                    </Typography>
                </Grid>
                <Grid p={2} sx={{ border: 1, borderColor: "#e0e0e0" }} item xs={10.6}>
                    <Question listExam={props.listExam} />
                    {/* <QuestionBox numberOfParts={props.numberOfParts} listPart={props.exam.listPart} listExam={props.listExam}/> */}
                </Grid>
                <Grid p={2} sx={{ border: 1, borderColor: "#e0e0e0" }} item xs={1.4}>
                    <AnswerBox listExam={props.listExam}/>
                </Grid>
            </Grid>
        </>
    );
}
