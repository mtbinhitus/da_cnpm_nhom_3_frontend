import React, { useState, useEffect } from "react";
import { Grid, Card, Box, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Part1QuestionBox from "../DetailComponent-v2/Part1QuestionBox";
import Part2QuestionBox from "../DetailComponent-v2/Part2QuestionBox";
import Part3QuestionBox from "../DetailComponent-v2/Part3QuestionBox";
import Part6QuestionBox from "../DetailComponent-v2/Part6QuestionBox";
import { async } from "q";

export default function DetailContent(props) {
    const [selectedPart, setSelectedPart] = useState(1);
    const [selectedQuestion, setSelectedQuestion] = useState(1);
    const [question, setQuestion] = useState([]);
    const [bookMark, setBookMark] = useState(1);
    const [answerSheet, setanswerSheet] = useState({ part1: [], part3: [], part4: [], part6: [], part7: [] });
    console.log(props.exam);
    console.log(question);

    useEffect(() => {
        console.log("useEffect has been called!");
        setSelectedPart(1);
        setSelectedQuestion(1);
        showQuestion(selectedPart, selectedQuestion);
    }, []);

    if (props.exam === undefined) return <p>Loading...</p>;

    const nextPart = (event, selectedPart) => {
        setSelectedPart(selectedPart + 1);
    };

    const getPartByQuestionNumber = async (offset) => {
        console.log(offset);
        if (offset < 6) setSelectedPart(1);
        if ((offset >= 6) & (offset <= 31)) setSelectedPart(2);
        if ((offset > 31) & (offset < 70)) setSelectedPart(3);
        if ((offset >= 70) & (offset < 100)) setSelectedPart(4);
        if ((offset >= 100) & (offset < 130)) setSelectedPart(5);
        if ((offset >= 130) & (offset < 146)) setSelectedPart(6);
        if (offset >= 146) setSelectedPart(7);
    };

    const nextQuestion = async (event) => {
      if(selectedPart )
        await getPartByQuestionNumber(selectedQuestion + 1);
        console.log(selectedPart);
        await showQuestion(selectedPart, selectedQuestion + 1);
        setSelectedQuestion(1 + selectedQuestion);
        console.log(selectedQuestion);
    };

    const findPartByOffset = async (inventory, offset) => {
        const result = inventory.find(({ partNumber }) => partNumber === offset);
        console.log(result);
        return result;
    };

    const findQuestionByOffset = async (inventory, offset) => {
        const result = await inventory.find(({ questionNumber }) => questionNumber === offset);
        console.log(result);
        return result;
    };

    // const showGroupQuestion = async (selectedPart, selectedQuestion) {

    // }

    const showQuestion = async (selectedPart, selectedQuestion) => {
        const part = await findPartByOffset(props.exam.listPart, selectedPart);
        const question = await findQuestionByOffset(part.listQuestion, selectedQuestion);
        console.log(selectedPart);
        console.log(selectedQuestion);
        switch (selectedPart) {
            case 1:
                console.log("Return Question Box 1");
                setQuestion(<Part1QuestionBox question={question}></Part1QuestionBox>);
                break;
            case 2:
                console.log("Return Question Box 2");
                setQuestion(<Part2QuestionBox question={question}></Part2QuestionBox>);
                break;
            case 3:
                setQuestion(<Part1QuestionBox question={question}></Part1QuestionBox>);
                break;
            case 4:
                setQuestion(<Part1QuestionBox question={question}></Part1QuestionBox>);
                break;
            case 5:
                setQuestion(<Part1QuestionBox question={question}></Part1QuestionBox>);
                break;
            case 6:
                setQuestion(<Part1QuestionBox question={question}></Part1QuestionBox>);
                break;
            case 7:
                setQuestion(<Part1QuestionBox question={question}></Part1QuestionBox>);
                break;
        }
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, with: "100%" }}>
                <Stack spacing={0} alignItems="center">
                    <Typography textAlign="flex-start" fontWeight={500} variant="h6">
                        PART {selectedPart}
                    </Typography>
                    {/* {question} */}
                    <Part6QuestionBox></Part6QuestionBox>
                    <Grid container mt={4} spacing={2} alignItems="center" justify="center">
                        <Grid item xs={6} md={6}>
                            <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
                                <Button variant="outlined">Book mark</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Stack direction="row" spacing={4} alignItems="center" justifyContent="flex-end">
                                <Button variant="outlined">Review answer</Button>
                                <Button variant="contained" onClick={nextQuestion} endIcon={<NavigateNextIcon />}>
                                    Câu tiếp theo
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </>
    );
}
