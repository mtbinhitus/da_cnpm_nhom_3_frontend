import { FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { React, useEffect, useState } from "react";
import "../../style/QuestionPage.css";

export default function Question(props) {
    const [listQuestion, setListQuestion] = useState();
    console.log("Question")
    console.log(listQuestion)
    useEffect(() => {
        setListQuestion(props.listExam)
    }, [props.listExam]);

   
    if (props.listExam === undefined) return <p>Loading...</p>;
    return (
        <div>
            <Stack py={2} justifyContent="center" spacing={2}>
                {/* {props.question.imgUrl.length > 0 && (
                    <Container sx={{maxWidth: "700px"}}>
                        <img
                            src={props.question.imgUrl}
                            alt={props.question.questionNumber}
                            loading="lazy"
                        />
                    </Container>
                )} */}
                {
                    props.listExam.map((value,item)=>(
                        <Stack direction="row" pt={1} justifyContent="flex-start" container spacing={2} mt={2}>
                        <div className="questionNumber">
                            <strong >{item +1}</strong>
                        </div>
                        <div className="option-list">
                            {value.question.length > 0 && (
                                <Typography variant="subtitle1">{value.question}</Typography>
                            )}
    
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={0}
                                name="radio-buttons-group"
                            >
                                {value.options.map((option, index) => (
                                    <FormControlLabel
                                        value={option.id}
                                        control={<Radio />}
                                        label={option.option}
                                    />
                                ))}
                            </RadioGroup>
                        </div>
                    </Stack>
                    ))
                }
              
            </Stack>
        </div>
    );
}
