import React, { useState, useEffect } from "react";
import { Grid, Box, Container, Stack, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const STATUS = {
    STARTED: "Started",
    STOPPED: "Stopped",
};

export default function QuestionBox(props) {
    // const [questionInfo, setQuestionInfo] = useState(props.data.questions[0]);
    // const [material, setMaterial] = useState(props.data.materials);
    const [value, setValue] = useState(0);

    console.log(props.data);
    console.log(value);

    useEffect(() => {
        checkFill();
    }, [props.data]);

    const handleChange = (event) => {
        setValue(event.target.value);
        props.fillAnswerSheet({ id: props.data.questions[0].id, answer: event.target.value });
    };

    const checkFill = () => {
        const index = props.sheet.findIndex((answer) => answer.id == props.data.questions[0].id);
        console.log(index);
        if (index !== -1) {
            setValue(props.sheet[index].answer);
        } else setValue("");
    };

    if (props.data.questions[0] === undefined) return <p>Loading...</p>;

    return (
        <Grid mt={2} container spacing={2} alignItems="center" justify="center">
            <Grid
                item
                xs={12}
                sm={12}
                lg={12}
                style={{ borderColor: "#1976d2", minHeight: "500px", maxHeight: "70vh", overflow: "auto" }}
                sx={{ border: 2 }}
            >
                <Stack pt={1} justifyContent="flex-start" spacing={2} mt={2}>
                    <div className="questionNumber">
                        <strong> Câu {props.data.questions[0].index}</strong>
                    </div>
                    <div style={{ paddingLeft: "1.5rem" }} className="option-list">
                        {props.data.questions[0].question !== null && (
                            <Typography variant="subtitle1">{props.data.questions[0].question}</Typography>
                        )}

                        {props.status === STATUS.STARTED ? (
                            <RadioGroup
                                aria-labelledby="answer-radio-buttons-group-label"
                                value={value}
                                name="radio-buttons-group"
                                onChange={handleChange}
                            >
                                {props.data.questions[0].options.map((option, index) => (
                                    <FormControlLabel value={option} control={<Radio />} label={option} key={index} />
                                ))}
                            </RadioGroup>
                        ) : (
                            <RadioGroup
                                aria-labelledby="answer-radio-buttons-group-label"
                                value={value}
                                name="radio-buttons-group"
                                onChange={handleChange}
                            >
                                {props.data.questions[0].options.map((option, index) => (
                                    <FormControlLabel disabled={true} value={option} control={<Radio />} label={option} key={index} />
                                ))}
                            </RadioGroup>
                        )}
                    </div>
                </Stack>
            </Grid>
        </Grid>
    );
}
