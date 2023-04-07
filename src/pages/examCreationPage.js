import { switchCase } from "@babel/types";
import { Button, ButtonGroup, Card, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import Part1Question from "../components/ExamCreationComponent/Part1Question";
import Part2Question from "../components/ExamCreationComponent/Part2Question";
import UploadExamContent from "../components/ExamCreationComponent/UploadExamContent";
import cloneDeep from "lodash/cloneDeep";
import QuestionCluster from "../components/ExamCreationComponent/QuestionCluster";
import DynamicQuestionCluster from "../components/ExamCreationComponent/DynamicQuestionCluster";
import QuestionModel from "../models/question";

const ExamCreationPage = () => {
    const examName = "New academy";
    const [seletedPart, setSeletedPart] = useState("1");
    const [numberQuestion, setNumberQuestion] = useState(1);
    const [part1List, setPart1List] = useState({
        questionClusters: [
            {
                id: 1,
                questions: [
                    {
                        id: 1,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                    },
                ],
            },
        ],
        size: 1,
        type: "part1",
    });
    const [part2List, setPart2List] = useState({
        questionClusters: [
            {
                id: 1,
                questions: [
                    {
                        id: 1,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                    },
                ],
            },
        ],
        size: 1,
        type: "part2",
    });
    const [part3List, setPart3List] = useState({
        questionClusters: [
            {
                id: 1,
                questions: [
                    {
                        id: 1,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                        questionContent: "",
                    },
                    {
                        id: 2,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                        questionContent: "",
                    },
                    {
                        id: 3,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                        questionContent: "",
                    },
                ],
            },
        ],
        size: 3,
        type: "part3",
    });
    const [part4List, setPart4List] = useState({
        questionClusters: [
            {
                id: 1,
                questions: [
                    {
                        id: 1,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                        questionContent: "",
                    },
                    {
                        id: 2,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                        questionContent: "",
                    },
                    {
                        id: 3,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                        questionContent: "",
                    },
                ],
            },
        ],
        size: 3,
        type: "part4",
    });
    const [part5List, setPart5List] = useState({
        questionClusters: [
            {
                id: 1,
                questions: [
                    {
                        id: 1,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                    },
                ],
            },
        ],
        size: 1,
        type: "part5",
    });
    const [part6List, setPart6List] = useState({
        questionClusters: [
            {
                id: 1,
                questions: [
                    {
                        id: 1,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                        questionContent: "",
                    },
                ],
            },
        ],
        size: 1,
        type: "part6",
    });
    const [part7List, setPart7List] = useState({
        questionClusters: [
            {
                id: 1,
                questions: [
                    {
                        id: 1,
                        options: {
                            a: "",
                            b: "",
                            c: "",
                            d: "",
                        },
                        correctOption: "",
                        explain: "",
                        material: "",
                        questionContent: "",
                    },
                ],
            },
        ],
        size: 1,
        type: "part7",
    });
    const addSingleQuestion = (clone) => {
        clone.questionClusters.push({
            id: clone.questionClusters.length + 1,
            questions: [QuestionModel(clone.questionClusters.length + 1, "", "", "", "", "", "")],
        });
        clone.size = clone.size + 1;
    };

    const addFixedQuestionCluster = (clone) => {
        const indexCluster = clone.questionClusters.length;
        const indexQuestion = (indexCluster + 1) * 2 + (indexCluster - 2 + 1);
        clone.questionClusters.push({
            id: indexCluster + 1,
            questions: [],
        });
        clone.questionClusters[indexCluster].questions.push(
            QuestionModel(indexQuestion, "", "", "", "", "", ""),
            QuestionModel(indexQuestion + 1, "", "", "", "", "", ""),
            QuestionModel(indexQuestion + 2, "", "", "", "", "", ""),
        );
        clone.size = clone.size + 3;
    };
    const addDynamicQuestionCluster = (clone) => {
        const indexCluster = clone.questionClusters.length;
        const indexQuestion = (indexCluster + 1) * 2 + (indexCluster - 2 + 1);
        clone.questionClusters.push({
            id: indexCluster + 1,
            questions: [],
        });
        clone.questionClusters[indexCluster].questions.push(QuestionModel(clone.size + 1, "", "", "", "", "", ""));
        clone.size = clone.size + 1;
    };

    const addQuestionComponet = (array, setFunc) => {
        var clone = cloneDeep(array);
        switch (clone.type) {
            case "part1":
                addSingleQuestion(clone);
                break;
            case "part2":
                // code block
                addSingleQuestion(clone);
                break;
            case "part3":
                // code block
                addFixedQuestionCluster(clone);
                break;
            case "part4":
                // code block
                addFixedQuestionCluster(clone);
                break;
            case "part5":
                // code block
                addSingleQuestion(clone);

                break;
            case "part6":
                addDynamicQuestionCluster(clone);
                break;

            case "part7":
                addDynamicQuestionCluster(clone);
                break;
        }
        setNumberQuestion(clone.size);
        setFunc(clone);
    };
    const handleChange = (event, value) => {
        setSeletedPart(value);
    };

    const saveList = (singleQList, setFunc) => {
        var clone = cloneDeep(singleQList);
        setFunc(clone);
    };

    const showPart = (seletedPart) => {
        switch (seletedPart) {
            case "1":
                // code block
                return (
                    <>
                        <UploadExamContent
                            singleQList={cloneDeep(part1List)}
                            addFunc={addQuestionComponet}
                            setFunc={setPart1List}
                            saveList={saveList}
                        >
                            <Part1Question />
                        </UploadExamContent>
                    </>
                );

            case "2":
                // code block
                return (
                    <>
                        <UploadExamContent
                            singleQList={cloneDeep(part2List)}
                            addFunc={addQuestionComponet}
                            setFunc={setPart2List}
                            saveList={saveList}
                        >
                            <Part2Question />
                        </UploadExamContent>
                    </>
                );
            case "3":
                // code block
                return (
                    <>
                        <UploadExamContent
                            singleQList={cloneDeep(part3List)}
                            addFunc={addQuestionComponet}
                            setFunc={setPart3List}
                            saveList={saveList}
                        >
                            <QuestionCluster />
                        </UploadExamContent>
                    </>
                );
            case "4":
                // code block
                return (
                    <>
                        <UploadExamContent
                            singleQList={cloneDeep(part4List)}
                            addFunc={addQuestionComponet}
                            setFunc={setPart4List}
                            saveList={saveList}
                        >
                            <QuestionCluster />
                        </UploadExamContent>
                    </>
                );
            case "5":
                // code block
                return (
                    <>
                        <UploadExamContent
                            singleQList={cloneDeep(part5List)}
                            addFunc={addQuestionComponet}
                            setFunc={setPart5List}
                            saveList={saveList}
                        >
                            <Part2Question />
                        </UploadExamContent>
                    </>
                );
            case "6":
                // code block
                return (
                    <>
                        <UploadExamContent
                            singleQList={cloneDeep(part6List)}
                            addFunc={addQuestionComponet}
                            setFunc={setPart6List}
                            setNumberQ={setNumberQuestion}
                            saveList={saveList}
                        >
                            <DynamicQuestionCluster />
                        </UploadExamContent>
                    </>
                );
            case "7":
                // code block
                return (
                    <>
                        <UploadExamContent
                            singleQList={cloneDeep(part7List)}
                            addFunc={addQuestionComponet}
                            setFunc={setPart7List}
                            setNumberQ={setNumberQuestion}
                            saveList={saveList}
                        >
                            <DynamicQuestionCluster />
                        </UploadExamContent>
                    </>
                );
        }
    };
    return (
        <>
            <Grid style={{ justifyContent: "center" }} container>
                <Grid item xs={9}>
                    <div style={{ width: "100" }}>
                        <Card variant="outlined" style={{ padding: "16px", marginTop: "16px" }}>
                            <div>Tạo đề thi mới</div>
                        </Card>
                        <Card variant="outlined" style={{ padding: "16px", marginTop: "16px" }}>
                            <div>{examName}</div>
                            <div className="part-group-btn" style={{ marginTop: "16px" }}>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={seletedPart}
                                    exclusive
                                    size="small"
                                    onChange={handleChange}
                                    aria-label="Platform"
                                >
                                    <ToggleButton
                                        onClick={(e) => setNumberQuestion(part1List.size)}
                                        className="part-selection-btn"
                                        color="primary"
                                        value="1"
                                    >
                                        Part 1
                                    </ToggleButton>
                                    <ToggleButton
                                        onClick={(e) => setNumberQuestion(part2List.size)}
                                        className="part-selection-btn"
                                        color="primary"
                                        value="2"
                                    >
                                        Part 2
                                    </ToggleButton>
                                    <ToggleButton
                                        onClick={(e) => setNumberQuestion(part3List.size)}
                                        className="part-selection-btn"
                                        color="primary"
                                        value="3"
                                    >
                                        Part 3
                                    </ToggleButton>
                                    <ToggleButton
                                        onClick={(e) => setNumberQuestion(part4List.size)}
                                        className="part-selection-btn"
                                        color="primary"
                                        value="4"
                                    >
                                        Part 4
                                    </ToggleButton>
                                    <ToggleButton
                                        onClick={(e) => setNumberQuestion(part5List.size)}
                                        className="part-selection-btn"
                                        color="primary"
                                        value="5"
                                    >
                                        Part 5
                                    </ToggleButton>
                                    <ToggleButton
                                        onClick={(e) => setNumberQuestion(part6List.size)}
                                        className="part-selection-btn"
                                        color="primary"
                                        value="6"
                                    >
                                        Part 6
                                    </ToggleButton>
                                    <ToggleButton
                                        onClick={(e) => setNumberQuestion(part7List.size)}
                                        className="part-selection-btn"
                                        color="primary"
                                        value="7"
                                    >
                                        Part 7
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Card>
                        <Card variant="outlined" style={{ padding: "16px", marginTop: "16px" }}>
                            <div>{showPart(seletedPart)}</div>
                        </Card>
                        <Card variant="outlined" style={{ padding: "16px", marginTop: "16px" }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>Tổng câu hỏi {numberQuestion}</div>
                                <Button variant="contained">Phần tiếp theo</Button>
                            </div>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default ExamCreationPage;
