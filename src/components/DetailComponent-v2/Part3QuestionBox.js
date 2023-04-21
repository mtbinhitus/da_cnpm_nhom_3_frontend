import React, { useState, useEffect } from "react";
import { Grid, Container, Stack, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function QuestionBox(props) {
    const [questionGroup, setQuestionGroup] = useState([]);

    useEffect(() => {
        setQuestionGroup([
            {
                questionNumber: 32,
                imgUrl: "",
                questionText: "What is the woman preparing for?",
                listOption: [
                    {
                        optionNumber: 1,
                        textOption: "A. A move to a new a city",
                    },
                    {
                        optionNumber: 2,
                        textOption: "B. A business trip",
                    },
                    {
                        optionNumber: 3,
                        textOption: "C. A building tour",
                    },
                    {
                        optionNumber: 4,
                        textOption: "D. A meeting with visiting colleagues",
                    },
                ],
            },
            {
                questionNumber: 33,
                imgUrl: "",
                questionText: "What is the woman preparing for?",
                listOption: [
                    {
                        optionNumber: 1,
                        textOption: "A. A move to a new a city",
                    },
                    {
                        optionNumber: 2,
                        textOption: "B. A business trip",
                    },
                    {
                        optionNumber: 3,
                        textOption: "C. A building tour",
                    },
                    {
                        optionNumber: 4,
                        textOption: "D. A meeting with visiting colleagues",
                    },
                ],
            },
            {
                questionNumber: 34,
                imgUrl: "",
                questionText: "What is the woman preparing for?",
                listOption: [
                    {
                        optionNumber: 1,
                        textOption: "A. A move to a new a city",
                    },
                    {
                        optionNumber: 2,
                        textOption: "B. A business trip",
                    },
                    {
                        optionNumber: 3,
                        textOption: "C. A building tour",
                    },
                    {
                        optionNumber: 4,
                        textOption: "D. A meeting with visiting colleagues",
                    },
                ],
            },
        ]);
    }, []);
    return (
        <Grid mt={4} container spacing={2} alignItems="center" justify="center">
            {/* <Grid item xs={6} md={6} style={{ minHeight: "500px" }}>
                {props.question.imgUrl.length > 0 && (
                    <Container sx={{ maxWidth: "700px" }}>
                        <img src={props.question.imgUrl} alt={props.question.questionNumber} loading="lazy" />
                    </Container>
                )}
            </Grid> */}
            <Grid item xs={12} md={12} style={{ borderColor: "#1976d2", minHeight: "500px" }} sx={{ border: 2 }}>
                {questionGroup.map((question, index) => (
                    <Stack pt={1} justifyContent="flex-start" container spacing={2} mt={2}>
                        <div className="questionNumber">
                            <strong> Câu {question.questionNumber}</strong>
                        </div>
                        <div style={{ paddingLeft: "1.5rem" }} className="option-list">
                            {question.questionText.length > 0 && (
                                <Typography variant="subtitle1">{question.questionText}</Typography>
                            )}

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={0}
                                name="radio-buttons-group"
                            >
                                {question.listOption.map((option, index) => (
                                    <FormControlLabel
                                        value={option.optionNumber}
                                        control={<Radio />}
                                        label={option.textOption}
                                    />
                                ))}
                            </RadioGroup>
                        </div>
                    </Stack>
                ))}
            </Grid>
        </Grid>
    );
}
