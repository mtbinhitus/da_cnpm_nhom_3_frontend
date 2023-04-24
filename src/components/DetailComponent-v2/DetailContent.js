import React, { useState, useEffect } from "react";
import { Grid, Card, Box, Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Stack } from "@mui/system";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Part1QuestionBox from "../DetailComponent-v2/Part1QuestionBox";
import Part2QuestionBox from "../DetailComponent-v2/Part2QuestionBox";
import Part3QuestionBox from "../DetailComponent-v2/Part3QuestionBox";
import Part6QuestionBox from "../DetailComponent-v2/Part6QuestionBox";
import Timer from "../DetailComponent-v2/Timer";

const NEXT = {
    STARTED: "Started",
    STOPPED: "Stopped",
};

const STATUS = {
    STARTED: "Started",
    STOPPED: "Stopped",
};

export default function DetailContent(props) {
    const [loading, setLoading] = useState(true);
    const [selectedPart, setSelectedPart] = useState(1);
    const [selectedQuestion, setSelectedQuestion] = useState(1);
    const [question, setQuestion] = useState([]);
    const [bookMark, setBookMark] = useState(1);
    const [answerSheet, setAnswerSheet] = useState([]);
    const [time, setTime] = useState(3);
    const [next, setNext] = useState(NEXT.STARTED);
    const [end, setEnd] = useState(STATUS.STARTED);
    const examId = useParams();
    const examResultId = 1;
    console.log(props.exam);
    console.log(question);
    console.log(answerSheet);

    useEffect(() => {
        console.log("useEffect has been called!");
        showQuestion(selectedPart, selectedQuestion);
    }, [end]);

    if (props.exam === undefined) return <p>Loading...</p>;

    const createAnswerSheet = async () => {
        var i = 1;

        // for part 1
        await props.exam.part1.forEach((item) => {
            console.log(item);
            item.questions.forEach((question) => {
                answerSheet.push({ part: "part1", id: question.id, answer: "", index: i });
                question.index = i;
                i = i + 1;
            });
        });

        // for part 2
        await props.exam.part2.forEach((item) => {
            console.log(item);
            item.questions.forEach((question) => {
                answerSheet.push({ part: "part2", id: question.id, answer: "", index: i });
                question.index = i;
                i = i + 1;
            });
        });

        // for part 3
        await props.exam.part3.forEach((item) => {
            console.log(item);
            item.questions.forEach((question) => {
                answerSheet.push({ part: "part3", id: question.id, answer: "", index: i });
                question.index = i;
                i = i + 1;
            });
        });

        // for part 4
        await props.exam.part4.forEach((item) => {
            console.log(item);
            item.questions.forEach((question) => {
                answerSheet.push({ part: "part4", id: question.id, answer: "", index: i });
                question.index = i;
                i = i + 1;
            });
        });

        // for part 5
        await props.exam.part5.forEach((item) => {
            console.log(item);
            item.questions.forEach((question) => {
                answerSheet.push({ part: "part5", id: question.id, answer: "", index: i });
                question.index = i;
                i = i + 1;
            });
        });

        // for part 6
        await props.exam.part6.forEach((item) => {
            console.log(item);
            item.questions.forEach((question) => {
                answerSheet.push({ part: "part6", id: question.id, answer: "", index: i });
                question.index = i;
                i = i + 1;
            });
        });

        // for part 7
        await props.exam.part7.forEach((item) => {
            console.log(item);
            item.questions.forEach((question) => {
                answerSheet.push({ part: "part7", id: question.id, answer: "", index: i });
                question.index = i;
                i = i + 1;
            });
        });

        setLoading(false);
    };

    if (loading === true) createAnswerSheet();

    const checkPartByQuestionNumber = async (offset) => {
        console.log(offset);
        if (offset <= 6) setSelectedPart(1);
        if ((offset > 6) & (offset <= 31)) setSelectedPart(2);
        if ((offset > 31) & (offset <= 70)) setSelectedPart(3);
        if ((offset > 70) & (offset <= 100)) setSelectedPart(4);
        if ((offset > 100) & (offset <= 130)) setSelectedPart(5);
        if ((offset > 130) & (offset <= 146)) setSelectedPart(6);
        if (offset > 146) setSelectedPart(7);
    };

    const nextQuestion = async (event) => {
        const isNextPart = async (partIndex, questionIndex) => {
            var isNextPart = true;
            const part = await findPartByOffset(partIndex);
            part.forEach((item) => {
                item.questions.forEach((question) => {
                    if (question.index === questionIndex) {
                        isNextPart = false;
                        return isNextPart;
                    }
                });
            });
            return isNextPart;
        };

        // await checkPartByQuestionNumber(selectedQuestion + 1);
        const isNext = await isNextPart(selectedPart, selectedQuestion + 1);
        console.log(selectedPart);
        console.log(isNext);
        let count = 0;
        if (isNext === true) {
            count = await showQuestion(selectedPart + 1, selectedQuestion + 1);
            setSelectedPart(selectedPart + 1);
        } else {
            count = await showQuestion(selectedPart, selectedQuestion + 1);
        }
        setSelectedQuestion(count + selectedQuestion);
        console.log(count + selectedQuestion);
    };

    const findPartByOffset = async (offset) => {
        switch (offset) {
            case 1:
                return props.exam.part1;
            case 2:
                return props.exam.part2;
            case 3:
                return props.exam.part3;
            case 4:
                return props.exam.part4;
            case 5:
                return props.exam.part5;
            case 6:
                return props.exam.part6;
            case 7:
                return props.exam.part7;
        }
    };

    const findQuestionByOffset = async (inventory, offset) => {
        let result = null;
        if (inventory === undefined) {
            return result;
        }
        inventory.forEach((item) => {
            item.questions.forEach((question) => {
                if (question.index === offset) {
                    result = item;
                    return result;
                }
            });
        });
        console.log(result);
        return result;
    };

    // const showGroupQuestion = async (selectedPart, selectedQuestion) {

    // }

    const fillAnswerSheet = (childData) => {
        console.log(childData);
        const index = answerSheet.findIndex((answer) => answer.id == childData.id);
        console.log(index);
        if (index !== -1) {
            // const updatedObj = { ...answerSheet[index], answer: childData.answer };
            // const updatedProjects = [...answerSheet.slice(0, index), updatedObj, ...answerSheet.slice(index + 1)];
            // setAnswerSheet(updatedProjects);
            answerSheet[index].answer = childData.answer;
            setAnswerSheet(answerSheet);
        }
    };

    const setEndFromTimer = (childData) => {
        console.log("Set end call");
        setEnd(childData);
    };

    const showQuestion = async (partIndex, questionIndex) => {
        console.log(partIndex);
        console.log(questionIndex);
        const part = await findPartByOffset(partIndex);
        const res = await findQuestionByOffset(part, questionIndex);
        if (res === null) {
            console.log(res);
            setNext(NEXT.STOPPED);
        }
        console.log(res);
        switch (partIndex) {
            case 1:
                console.log("Return Question Box 1");
                setQuestion(
                    <Part1QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part1QuestionBox>,
                );
                return res.questions.length;
            case 2:
                console.log("Return Question Box 2");
                setQuestion(
                    <Part2QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part2QuestionBox>,
                );
                return res.questions.length;
            case 3:
                console.log("Return Question Box 3");
                setQuestion(
                    <Part3QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part3QuestionBox>,
                );
                return res.questions.length;
            case 4:
                console.log("Return Question Box 4");
                setQuestion(
                    <Part3QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part3QuestionBox>,
                );
                return res.questions.length;
            case 5:
                console.log("Return Question Box 5");
                setQuestion(
                    <Part2QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part2QuestionBox>,
                );
                return res.questions.length;
            case 6:
                console.log("Return Question Box 6");
                setQuestion(
                    <Part6QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part6QuestionBox>,
                );
                return res.questions.length;
            case 7:
                console.log("Return Question Box 7");
                setQuestion(
                    <Part6QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part6QuestionBox>,
                );
                return res.questions.length;
        }
    };

    const handleSubmit = (event) => {
        console.log(answerSheet);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, with: "100%" }}>
                <Stack spacing={0} alignItems="center">
                    <Typography textAlign="flex-start" fontWeight={500} variant="h6">
                        PART {selectedPart}
                    </Typography>
                    <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
                        <Link to={`/exam-detail/${examId.examId}/results/${examResultId}`} style={{ textDecoration: "none" }}>
                            <Button variant="contained" onClick={handleSubmit} color="primary">
                                Nộp Bài
                            </Button>
                        </Link>
                        <Timer setEndFromTimer={setEndFromTimer} time={time} status={STATUS.STARTED}></Timer>
                    </Stack>
                    {question}
                    {/* <Part2QuestionBox data={props.exam.part1[0]}></Part2QuestionBox> */}
                    <Grid container mt={2} spacing={2} alignItems="center" justify="center">
                        <Grid item xs={6} md={6}>
                            <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
                                <Button variant="outlined">Book mark</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Stack direction="row" spacing={4} alignItems="center" justifyContent="flex-end">
                                <Button variant="outlined">Review answer</Button>
                                {next === NEXT.STARTED ? (
                                    <Button variant="contained" onClick={nextQuestion} endIcon={<NavigateNextIcon />}>
                                        Câu tiếp theo
                                    </Button>
                                ) : (
                                    <Button
                                        disabled
                                        variant="contained"
                                        onClick={nextQuestion}
                                        endIcon={<NavigateNextIcon />}
                                    >
                                        Câu tiếp theo
                                    </Button>
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </>
    );
}
