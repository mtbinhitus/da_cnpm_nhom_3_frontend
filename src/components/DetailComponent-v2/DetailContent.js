import React, { useState, useEffect } from 'react';
import {
    Grid,
    Box,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    IconButton,
    Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useParams, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ReactAudioPlayer from 'react-audio-player';
import Part1QuestionBox from './Part1QuestionBox';
import Part2QuestionBox from './Part2QuestionBox';
import Part3QuestionBox from './Part3QuestionBox';
import Part4QuestionBox from './Part4QuestionBox';
import Part5QuestionBox from './Part5QuestionBox';
import Part6QuestionBox from './Part6QuestionBox';
import Part7QuestionBox from './Part7QuestionBox';
import Timer from './Timer';
import { submitExam } from '../../services/examService';

const NEXT = {
    STARTED: 'Started',
    STOPPED: 'Stopped',
};

const STATUS = {
    STARTED: 'Started',
    STOPPED: 'Stopped',
};

const INITIAL_COUNT = 7200;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailContent(props) {
    const [loading, setLoading] = useState(true);
    const [selectedPart, setSelectedPart] = useState(1);
    const [selectedQuestion, setSelectedQuestion] = useState(1);
    const [question, setQuestion] = useState([]);
    // const [bookMark, setBookMark] = useState(1);
    const [answerSheet, setAnswerSheet] = useState([]);
    const [time] = useState(INITIAL_COUNT);
    const [next, setNext] = useState(NEXT.STARTED);
    const [end, setEnd] = useState(STATUS.STARTED);
    const [open, setOpen] = useState(false);
    const examId = useParams();
    const navigate = useNavigate();
    // const [, forceUpdate] = useReducer((x) => x + 1, 0);

    const [audioUrl, setAudioUrl] = useState('');

    useEffect(() => {
        setAudioUrl(props.exam.media);
    }, []);

    console.log(props.exam);
    console.log(question);
    console.log(answerSheet);

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
            default:
                return null;
        }
    };

    const findQuestionByOffset = async (inventory, offset) => {
        let result = null;
        if (inventory === undefined || inventory === null) {
            return result;
        }
        inventory.forEach((item) => {
            item.questions.forEach((ques) => {
                if (ques.index === offset) {
                    result = item;
                }
            });
        });
        return result;
    };

    // const showGroupQuestion = async (selectedPart, selectedQuestion) {

    // }

    const fillAnswerSheet = (childData) => {
        console.log(childData);
        const index = answerSheet.findIndex((answer) => answer.id === childData.id);
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
        console.log('Set end call');
        setEnd(childData);
    };

    const handleSubmit = async () => {
        console.log(answerSheet);
        const listening = [];
        const reading = [];
        answerSheet.forEach((element) => {
            switch (element.part) {
                case 1:
                case 2:
                case 3:
                case 4:
                    listening.push(element);
                    break;
                case 5:
                case 6:
                case 7:
                default:
                    reading.push(element);
                    break;
            }
        });
        // get respone
        const res = await submitExam(examId.examId, listening, reading);
        const examResultId = 1;

        navigate(`/exam-detail/${examId.examId}/results/${examResultId}`, {
            state: { lScore: res.body.listening, rScore: res.body.writing },
        });
    };

    const showQuestion = async (partIndex, questionIndex) => {
        console.log('Show Question Call');
        console.log(partIndex);
        console.log(questionIndex);
        let temp = <Typography>Question was not found!</Typography>;
        const part = await findPartByOffset(partIndex);
        const res = await findQuestionByOffset(part, questionIndex);
        if (res === null) {
            console.log(res);
            setNext(NEXT.STOPPED);
        }
        console.log(res);
        switch (partIndex) {
            case 1:
                console.log('Return Question Box 1');
                temp = (
                    <Part1QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part1QuestionBox>
                );
                setQuestion(temp);
                return res.questions.length;
            case 2:
                console.log('Return Question Box 2');
                temp = (
                    <Part2QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part2QuestionBox>
                );
                setQuestion(temp);
                return res.questions.length;
            case 3:
                console.log('Return Question Box 3');
                temp = (
                    <Part3QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part3QuestionBox>
                );
                setQuestion(temp);
                return res.questions.length;
            case 4:
                console.log('Return Question Box 4');
                temp = (
                    <Part4QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part4QuestionBox>
                );
                setQuestion(temp);
                return res.questions.length;
            case 5:
                console.log('Return Question Box 5');
                temp = (
                    <Part5QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part5QuestionBox>
                );
                setQuestion(temp);
                return res.questions.length;
            case 6:
                console.log('Return Question Box 6');
                temp = (
                    <Part6QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part6QuestionBox>
                );
                setQuestion(temp);
                return res.questions.length;
            case 7:
                console.log('Return Question Box 7');
                temp = (
                    <Part7QuestionBox
                        fillAnswerSheet={fillAnswerSheet}
                        data={res}
                        sheet={answerSheet}
                        status={end}
                    ></Part7QuestionBox>
                );
                setQuestion(temp);
                return res.questions.length;
            default:
                console.log('Return error box');
                return 0;
        }
    };

    useEffect(() => {
        console.log('useEffect has been called!');
        showQuestion(selectedPart, selectedQuestion);
    }, [end, answerSheet]);

    if (props.exam === undefined) return <p>Loading...</p>;
    if (props.exam.part1.length === 0) return <Alert severity="error">Exam information is not available!</Alert>;

    const createAnswerSheet = async () => {
        let i = 1;

        // for part 1
        await props.exam.part1.forEach((item) => {
            item.questions.forEach((questionItem) => {
                answerSheet.push({ part: 1, id: questionItem.id, answer: '', index: i });
                questionItem.index = i;
                i += 1;
            });
        });

        // for part 2
        await props.exam.part2.forEach((item) => {
            item.questions.forEach((questionItem) => {
                answerSheet.push({ part: 2, id: questionItem.id, answer: '', index: i });
                questionItem.index = i;
                i += 1;
            });
        });

        // for part 3
        await props.exam.part3.forEach((item) => {
            item.questions.forEach((questionItem) => {
                answerSheet.push({ part: 3, id: questionItem.id, answer: '', index: i });
                questionItem.index = i;
                i += 1;
            });
        });

        // for part 4
        await props.exam.part4.forEach((item) => {
            item.questions.forEach((questionItem) => {
                answerSheet.push({ part: 4, id: questionItem.id, answer: '', index: i });
                questionItem.index = i;
                i += 1;
            });
        });

        // for part 5
        await props.exam.part5.forEach((item) => {
            item.questions.forEach((questionItem) => {
                answerSheet.push({ part: 5, id: questionItem.id, answer: '', index: i });
                questionItem.index = i;
                i += 1;
            });
        });

        // for part 6
        await props.exam.part6.forEach((item) => {
            item.questions.forEach((questionItem) => {
                answerSheet.push({ part: 6, id: questionItem.id, answer: '', index: i });
                questionItem.index = i;
                i += 1;
            });
        });

        // for part 7
        await props.exam.part7.forEach((item) => {
            item.questions.forEach((questionItem) => {
                answerSheet.push({ part: 7, id: questionItem.id, answer: '', index: i });
                questionItem.index = i;
                i += 1;
            });
        });

        setLoading(false);
    };

    if (loading === true) createAnswerSheet();

    const nextQuestion = async () => {
        const isNextPart = async (partIndex, questionIndex) => {
            let isNext = true;
            const part = await findPartByOffset(partIndex);
            part.forEach((item) => {
                item.questions.forEach((questionItem) => {
                    if (questionItem.index === questionIndex) {
                        isNext = false;
                    }
                });
            });

            return isNext;
        };

        // await checkPartByQuestionNumber(selectedQuestion + 1);
        const isNext = await isNextPart(selectedPart, selectedQuestion + 1);
        console.log(selectedPart);
        console.log(isNext);
        let count = 0;
        if (isNext === true) {
            count = await showQuestion(selectedPart + 1, selectedQuestion + 1);
            if (selectedPart < 7) setSelectedPart(selectedPart + 1);
        } else {
            count = await showQuestion(selectedPart, selectedQuestion + 1);
        }
        setSelectedQuestion(count + selectedQuestion);
        console.log(count + selectedQuestion);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const goToQuestion = async (event, value) => {
        console.log(value);
        const part = await findPartByOffset(value.part);
        const count = await findQuestionByOffset(part, value.index);
        await showQuestion(value.part, value.index);
        console.log(count);
        setSelectedPart(value.part);
        setSelectedQuestion(count.questions[count.questions.length - 1].index);
        setOpen(false);
        setNext(NEXT.STARTED);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, with: '100%' }}>
                <Stack spacing={0} alignItems="center">
                    <Typography textAlign="flex-start" fontWeight={500} variant="h6">
                        PART {selectedPart}
                    </Typography>
                    <Stack mt={1} direction="row" spacing={4} alignItems="center" justifyContent="center">
                        {/* <Link
                            to={`/exam-detail/${examId.examId}/results/${examResultId}`}
                            style={{ textDecoration: "none" }}
                        ></Link> */}
                        <Button variant="contained" onClick={handleSubmit} color="primary">
                            Nộp Bài
                        </Button>
                        <Timer setEndFromTimer={setEndFromTimer} time={time} status={STATUS.STARTED}></Timer>
                    </Stack>
                    <ReactAudioPlayer style={{ marginTop: '1rem' }} src={audioUrl} autoPlay controls />
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
                                <Button variant="outlined" onClick={handleClickOpen}>
                                    Review answer
                                </Button>
                                <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>
                                        {'ANSWER SHEET'}
                                        <IconButton
                                            aria-label="close"
                                            onClick={handleClose}
                                            sx={{
                                                position: 'absolute',
                                                right: 8,
                                                top: 8,
                                                color: 'ffffff',
                                            }}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </DialogTitle>
                                    <DialogContent>
                                        <Grid container justifyContent="flex-start" spacing={2}>
                                            {answerSheet.map((value) => (
                                                <Grid key={value.id} xs={1} sm={1} lg={1} item>
                                                    <Button
                                                        variant={value.answer === '' ? 'outlined' : 'contained'}
                                                        sx={{ minWidth: '28px', height: '25px', width: '28px' }}
                                                        onClick={(event) => goToQuestion(event, value)}
                                                    >
                                                        {value.index}
                                                    </Button>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </DialogContent>
                                    <DialogActions></DialogActions>
                                </Dialog>

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
