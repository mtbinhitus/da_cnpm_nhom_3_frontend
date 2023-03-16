import React from "react";
import "../../style/QuestionPage.css";
import { Stack, Box, Grid, RadioGroup, FormControlLabel, Radio, Typography, Container } from "@mui/material";

export default function Question(props) {
    const [answer, setAnswer] = React.useState(null);

    const handleChange = (event) => {
        setAnswer(event.target.answer);
    };
    console.log(props.question.listOption);
    return (
        <div>
            <Stack py={2} justifyContent="center" spacing={2}>
                {props.question.imgUrl.length > 0 && (
                    <Container sx={{maxWidth: "700px"}}>
                        <img
                            src={props.question.imgUrl}
                            alt={props.question.questionNumber}
                            loading="lazy"
                        />
                    </Container>
                )}

                <Stack direction="row" pt={1} justifyContent="flex-start" container spacing={2} mt={2}>
                    <div className="questionNumber">
                        <strong >{props.question.questionNumber}</strong>
                    </div>
                    <div className="option-list">
                        {props.question.questionText.length > 0 && (
                            <Typography variant="subtitle1">{props.question.questionText}</Typography>
                        )}

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={0}
                            name="radio-buttons-group"
                        >
                            {props.question.listOption.map((option, index) => (
                                <FormControlLabel
                                    value={option.optionNumber}
                                    control={<Radio />}
                                    label={option.textOption}
                                />
                            ))}
                        </RadioGroup>
                    </div>
                </Stack>
            </Stack>
        </div>
    );
}
