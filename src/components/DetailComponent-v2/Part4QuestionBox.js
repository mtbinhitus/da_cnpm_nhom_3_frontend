import React, { useState, useEffect } from "react";
import { Grid, Container, Stack, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const STATUS = {
    STARTED: "Started",
    STOPPED: "Stopped",
};

export default function QuestionBox(props) {
    // const [questionInfo, setQuestionInfo] = useState(props.data.questions[0]);
    // const [material, setMaterial] = useState(props.data.materials);
    const [listValue, setListValue] = useState(["","","","",""]);

    console.log(props.data);
    console.log(listValue);

    useEffect(() => {
        console.log("use effect from part");
        checkFill();
    }, [props.data, props.status]);

    const createListValue = () => {
        var temp = [];
        props.data.questions.forEach((question, index) => {
            temp.push("");
        });
        setListValue(temp);
    };

    const handleChange = (event, index) => {
        console.log(event.target);
        console.log(index);
        listValue[index] = event.target.value;
        const newListValue = listValue.map((value, offset) => (offset === index ? event.target.value : value));
        setListValue(newListValue);
        console.log(newListValue);
        props.fillAnswerSheet({ id: parseInt(event.target.name), answer: event.target.value });
    };

    const checkFill = () => {
        console.log("Check fill call");
        props.data.questions.forEach((question, index) => {
            const offset = props.sheet.findIndex((answer) => answer.id == question.id);
            listValue[index] = props.sheet[offset].answer;
        });
        console.log(listValue);
        setListValue(listValue.slice());
    };

    if (props.data.questions[0] === undefined) return <p>Loading...</p>;

    return (
        <Grid mt={2} container spacing={2} alignItems="center" justify="center">
            <Grid
                item
                xs={12}
                sm={12}
                lg={12}
                style={{ borderColor: "#1976d2", minHeight: "500px", maxHeight: "60vh", overflow: "auto" }}
                sx={{ border: 2 }}
            >
                {props.data.questions.map((item, index) => (
                    <Stack pt={1} justifyContent="flex-start" spacing={2} mt={2}>
                        <div className="questionNumber">
                            <strong> Câu {item.index}</strong>
                        </div>

                        <div style={{ paddingLeft: "1.5rem" }} className="option-list">
                            {item.question.length > 0 && <Typography variant="subtitle1">{item.question}</Typography>}
                            {props.status === STATUS.STARTED ? (
                                <RadioGroup
                                    aria-labelledby="answer-radio-buttons-group-label"
                                    value={listValue[index]}
                                    name={item.id}
                                    onChange={(event) => handleChange(event, index)}
                                >
                                    {item.options.map((option) => (
                                        <FormControlLabel
                                            value={option}
                                            control={<Radio />}
                                            label={option}
                                            key={option}
                                        />
                                    ))}
                                </RadioGroup>
                            ) : (
                                <RadioGroup
                                    aria-labelledby="answer-radio-buttons-group-label"
                                    value={listValue[index]}
                                    name={item.id}
                                    onChange={(event) => handleChange(event, index)}
                                >
                                    {item.options.map((option) => (
                                        <FormControlLabel
                                            value={option}
                                            control={<Radio />}
                                            label={option}
                                            key={option}
                                            disabled={true}
                                        />
                                    ))}
                                </RadioGroup>
                            )}
                        </div>
                    </Stack>
                ))}
            </Grid>
        </Grid>
    );
}
