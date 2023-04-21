import React, { useState, useEffect } from "react";
import { Grid, Container, Stack, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";


export default function QuestionBox(props) {

    return (
        <Grid mt={4} container spacing={2} alignItems="center" justify="center">
            <Grid item xs={6} md={6} style={{ minHeight: "500px" }}>
                {props.question.imgUrl.length > 0 && (
                    <Container sx={{ maxWidth: "700px" }}>
                        <img src={props.question.imgUrl} alt={props.question.questionNumber} loading="lazy" />
                    </Container>
                )}
            </Grid>
            <Grid item xs={6} md={6} style={{borderColor: "#1976d2", minHeight: "500px" }} sx={{border: 2 }}>
                <Stack pt={1} justifyContent="flex-start" container spacing={2} mt={2}>
                    <div className="questionNumber">
                        <strong> Câu {props.question.questionNumber}</strong>
                    </div>
                    <div style={{paddingLeft: "1.5rem"}} className="option-list">
                        {props.question.questionText.length > 0 && (
                            <Typography variant="subtitle1">{props.question.questionText}</Typography>
                        )}

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={0}
                            name="radio-buttons-group"
                        >
                            {props.question.listOption.map((option, index) => (
                                <FormControlLabel value={option.optionNumber} control={<Radio />} label={option.textOption} />
                            ))}
                        </RadioGroup>
                    </div>
                </Stack>
            </Grid>
        </Grid>
    );
}
