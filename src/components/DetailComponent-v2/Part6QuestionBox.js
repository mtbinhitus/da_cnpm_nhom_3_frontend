import React, { useState, useEffect } from "react";
import { Grid, Container, Stack, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function QuestionBox(props) {
    // const [questionInfo, setQuestionInfo] = useState(props.data.questions[0]);
    // const [material, setMaterial] = useState(props.data.materials);
    const [listValue, setListValue] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(props.data);
    console.log(listValue);

    useEffect(() => {
        setLoading(true);
        checkFill();
    }, [props.data]);

    const createListValue = () => {
        var temp = [];
        props.data.questions.forEach((question, index) => {
            temp.push("");
        });
        setListValue(temp);
        setLoading(false);
    };

    if (loading === true) {
        createListValue();
    }

    const getHandle = (index) => {
        return listValue[index];
    };

    const handleChange = (event, index) => {
        console.log(event.target);
        console.log(index);
        listValue[index] = event.target.value;
        const newListValue = listValue.map((value, offset) => offset === index ? event.target.value : value);
        setListValue(newListValue);
        console.log(newListValue);
        props.fillAnswerSheet({ id: parseInt(event.target.name), answer: event.target.value });
    };

    const checkFill = () => {
        console.log("Check fill call");
        props.data.questions.forEach((question, index) => {
            const offset = props.sheet.findIndex(answer => answer.id == question.id);
            listValue[index] = props.sheet[offset].answer;
        });
        setListValue(listValue);
    };

    if (props.data.questions[0] === undefined) return <p>Loading...</p>;

    return (
        <Grid mt={4} container spacing={2} alignItems="center" justify="center">
            <Grid item xs={12} sm={12} lg={6} style={{ minHeight: "500px",  maxHeight: "70vh", overflow: "auto"}}>
                {props.data.materials.length > 0 && (props.data.materials.map(
                    (item, index) =>
                        item.length > 0 && (
                            <Container key={index} sx={{ maxWidth: "500px", marginBottom: "2rem" }}>
                                <img src={item} alt={item} loading="lazy" style={{ maxWidth: "500px" }} />
                            </Container>
                        ),
                ))}
            </Grid>

            <Grid
                item
                xs={12}
                sm={12}
                lg={6}
                style={{ borderColor: "#1976d2", minHeight: "500px",  maxHeight: "70vh", overflow: "auto"}}
                sx={{ border: 2 }}
            >
                {props.data.questions.map((item, index) => (
                    <Stack pt={1} justifyContent="flex-start" spacing={2} mt={2}>
                        <div className="questionNumber">
                            <strong> Câu {item.index}</strong>
                        </div>
                        {console.log(getHandle(index))}
                        <div style={{ paddingLeft: "1.5rem" }} className="option-list">
                            {item.question.length > 0 && <Typography variant="subtitle1">{item.question}</Typography>}
                            <RadioGroup
                                aria-labelledby="answer-radio-buttons-group-label"
                                value={getHandle(index)}
                                name={item.id}
                                onChange={(event) => handleChange(event, index)}
                            >
                                {item.options.map((option) => (
                                    <FormControlLabel value={option} control={<Radio />} label={option} key={option} />
                                ))}
                            </RadioGroup>
                        </div>
                    </Stack>
                ))}
            </Grid>
        </Grid>
    );
}
