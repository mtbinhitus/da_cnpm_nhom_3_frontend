import { FormControlLabel, Grid, IconButton, Radio, RadioGroup, FormControl, TextField } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton, UploadDropzone } from "react-uploader";
import QuestionModel from "../../models/question";

const Part3Question = ({ index, question, indexInCluster }) => {
    const [optionA, setOptionA] = useState(question.questions[indexInCluster].options.a);
    const [optionB, setOptionB] = useState(question.questions[indexInCluster].options.b);
    const [optionC, setOptionC] = useState(question.questions[indexInCluster].options.c);
    const [optionD, setOptionD] = useState(question.questions[indexInCluster].options.d);
    const [correctOption, setCorrectOption] = useState(question.questions[indexInCluster].correctOption);
    const [explain, setExplain] = useState(question.questions[indexInCluster].explain);
    const [questionContent, setQuestionContent] = useState(question.questions[indexInCluster].questionContent);

    useEffect(() => {
        updateDetailQuestion();
    }, []);

    const updateDetailQuestion = () => {
        question.questions[indexInCluster] = QuestionModel(
            index,
            optionA,
            optionB,
            optionC,
            optionD,
            correctOption,
            explain,
            questionContent,
        );
    };
    useEffect(() => {
        updateDetailQuestion();
    }, [optionA, optionB, optionC, optionD, correctOption, explain]);
    return (
        <>
            <div className="d-flex justify-content-between">
                <div>No. {index}</div>
                <IconButton size="medium" color="error">
                    <HighlightOffIcon></HighlightOffIcon>
                </IconButton>
            </div>
            <div>Question</div>
            <div>
                <TextField
                    style={{ marginTop: "7px", width: "100%" }}
                    id="outlined-basic"
                    size="small"
                    label=""
                    value={questionContent}
                    variant="outlined"
                    onChange={(e) => {
                        setQuestionContent(e.target.value);
                    }}
                />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div>Option</div>
                    <FormControl>
                        <Grid container columnSpacing={3}>
                            <Grid item xs={1}>
                                <RadioGroup
                                    value={correctOption}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        style={{ marginTop: "5px" }}
                                        value="a"
                                        control={<Radio />}
                                        label="a"
                                        key={"a"}
                                        onClick={(e) => {
                                            setCorrectOption("a");
                                        }}
                                    />
                                    <FormControlLabel
                                        style={{ marginTop: "5px" }}
                                        value="b"
                                        control={<Radio />}
                                        label="b"
                                        key={"b"}
                                        onClick={(e) => {
                                            setCorrectOption("b");
                                        }}
                                    />
                                    <FormControlLabel
                                        style={{ marginTop: "5px" }}
                                        value="c"
                                        control={<Radio />}
                                        label="c"
                                        key={"c"}
                                        onClick={(e) => {
                                            setCorrectOption("c");
                                        }}
                                    />
                                    <FormControlLabel
                                        style={{ marginTop: "5px" }}
                                        value="d"
                                        key={"d"}
                                        control={<Radio />}
                                        label="d"
                                        onClick={(e) => {
                                            setCorrectOption("d");
                                        }}
                                    />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    style={{ marginTop: "7px", width: "100%" }}
                                    id="outlined-basic"
                                    size="small"
                                    label=""
                                    variant="outlined"
                                    value={optionA}
                                    onChange={(e) => {
                                        setOptionA(e.target.value);
                                    }}
                                />
                                <TextField
                                    style={{ marginTop: "7px", width: "100%" }}
                                    id="outlined-basic"
                                    size="small"
                                    label=""
                                    variant="outlined"
                                    value={optionB}
                                    onChange={(e) => {
                                        setOptionB(e.target.value);
                                    }}
                                />
                                <TextField
                                    style={{ marginTop: "7px", width: "100%" }}
                                    id="outlined-basic"
                                    size="small"
                                    label=""
                                    variant="outlined"
                                    value={optionC}
                                    onChange={(e) => {
                                        setOptionC(e.target.value);
                                    }}
                                />
                                <TextField
                                    style={{ marginTop: "7px", width: "100%" }}
                                    id="outlined-basic"
                                    size="small"
                                    label=""
                                    variant="outlined"
                                    value={optionD}
                                    onChange={(e) => {
                                        setOptionD(e.target.value);
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <div className="mt-2 mb-2">Explain</div>
                    <TextField
                        className="w-100"
                        id="standard-multiline-flexible"
                        multiline
                        minRows={4}
                        variant="outlined"
                        value={explain}
                        onChange={(e) => {
                            setExplain(e.target.value);
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
};
export default Part3Question;
