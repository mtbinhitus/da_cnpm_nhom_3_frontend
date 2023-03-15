import { React, useState } from "react";
import { Button, Grid, Card, Typography, Stack } from "@mui/material";
import QuestionBox from "../DetailComponent/QuestionBox";
import AnswerBox from "../DetailComponent/AnswerBox";

export default function DetailContent(props) {
    console.log(props);
    return (
        <>
            <Grid container spacing={2} mt={4}>
                <Grid p={2} item xs={12} mb={2}>
                    <Stack mb={0.5} justifyContent="center" spacing={2} direction="row">
                        <Typography fontWeight={500} textAlign="center" variant="h5">
                            {props.exam.examName}
                        </Typography>
                        <Button sx={{ bgcolor: "#e8f2ff" }} size="small" variant="outlined">
                            Thoát
                        </Button>
                    </Stack>
                    <Typography textAlign="center" variant="h6">
                        Bộ đề thi: {props.exam.examCol}
                    </Typography>
                </Grid>
                <Grid p={2} sx={{ border: 1, borderColor: "#e0e0e0" }} item xs={10.6}>
                    <QuestionBox numberOfParts={props.numberOfParts} listPart={props.exam.listPart} />
                </Grid>
                <Grid p={2} sx={{ border: 1, borderColor: "#e0e0e0"}} item xs={1.4}>
                    <AnswerBox numberOfParts={props.numberOfParts} listPart={props.exam.listPart} />
                </Grid>
            </Grid>
        </>
    );
}