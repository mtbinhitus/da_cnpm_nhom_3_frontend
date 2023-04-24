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
import Part1ListModel from "../models/part1List";
import Part2ListModel from "../models/part2List";
import Part3ListModel from "../models/part3List";
import Part4ListModel from "../models/part4List";
import Part5ListModel from "../models/part5List";
import Part6ListModel from "../models/part6List";
import Part7ListModel from "../models/part7List";
import ExamModel from "../models/exam";
import { Dropzone, FileMosaic, uploadFile } from "@files-ui/react";
import uploadFileFunc from "../services/upload-file";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import request from "../utils/request";
import Swal from "sweetalert2";

const ExamCreationPage = () => {
    const examName = "New academy";
    const [isSave, setIsSave] = useState(false);
    const [seletedPart, setSeletedPart] = useState("1");
    const [numberQuestion, setNumberQuestion] = useState(1);
    const [part1List, setPart1List] = useState(Part1ListModel());
    const [part2List, setPart2List] = useState(Part2ListModel());
    const [part3List, setPart3List] = useState(Part3ListModel());
    const [part4List, setPart4List] = useState(Part4ListModel());
    const [part5List, setPart5List] = useState(Part5ListModel());
    const [part6List, setPart6List] = useState(Part6ListModel());
    const [part7List, setPart7List] = useState(Part7ListModel());
    const [previewFile, setPreviewFile] = useState({ part1: [], part3: [], part4: [], part6: [], part7: [] });
    const [soundFile, setSoundFile] = useState([]);
    const [materialUrl, setMaterialUrl] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const formData = new FormData();
    const [loading, setLoading] = useState(false);

    if (!localStorage.getItem("role").includes('admin')) {
        navigate("/");
    }

    const addSingleQuestion = (clone) => {
        clone.questionClusters.push({
            id: clone.questionClusters.length + 1,
            questions: [QuestionModel(clone.questionClusters.length + 1, "", "", "", "", "", "")],
            material: [],
        });
        clone.size = clone.size + 1;
    };

    const addFixedQuestionCluster = (clone) => {
        const indexCluster = clone.questionClusters.length;
        const indexQuestion = (indexCluster + 1) * 2 + (indexCluster - 2 + 1);
        clone.questionClusters.push({
            id: indexCluster + 1,
            questions: [],
            material: [],
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
            material: [],
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
                            previewFile={previewFile}
                            setPreviewFile={setPreviewFile}
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
                            previewFile={previewFile}
                            setPreviewFile={setPreviewFile}
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
                            previewFile={previewFile}
                            setPreviewFile={setPreviewFile}
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
                            previewFile={previewFile}
                            setPreviewFile={setPreviewFile}
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
                            previewFile={previewFile}
                            setPreviewFile={setPreviewFile}
                        >
                            <DynamicQuestionCluster />
                        </UploadExamContent>
                    </>
                );
        }
    };

    const updateFiles = async (incommingFiles) => {
        // incommingFiles[0]?.name = "hello.jpg";
        var cloneAudioFile = cloneDeep(incommingFiles);
        setSoundFile(cloneAudioFile);
        console.log(incommingFiles);
        var audioUrl;
        for (let i = 0; i < incommingFiles.length; i++) {
            const fileName = `audio`;
            var newFile = new File([incommingFiles[i].file], fileName, { type: incommingFiles[i].type });
            const url = await uploadFileFunc(newFile, "audio");
            if (typeof url !== "undefined") setMaterialUrl(url);
        }
    };

    const submitExam = async () => {
        console.log(part1List);
        setLoading(true);
        const exam = ExamModel(
            location.state.examId,
            part1List,
            part2List,
            part3List,
            part4List,
            part5List,
            part6List,
            part7List,
            materialUrl,
        );
        const res = await request.post("exam/questionCrt", JSON.stringify(exam));
        // const resJson = await res.json();
        console.log(res);
        setLoading(false);
        if (res.data.code === 200) {
            navigate("/admin/exams");
            Swal.fire({
                position: "center",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
        }

        console.log(exam);
    };

    if (loading === true)
        return (
            <LoadingOutlined
                style={{
                    fontSize: "60px",
                    color: "#0C5182",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                }}
            />
        );

    return (
        <>
            <Grid style={{ justifyContent: "center" }} container>
                <Grid item xs={9}>
                    <div style={{ width: "100" }}>
                        <Card variant="outlined" style={{ padding: "16px", marginTop: "16px" }}>
                            <div>Tạo đề thi mới</div>
                            <div className="mt-3">
                                <Dropzone
                                    label="Drop your listening file here !"
                                    accept="audio/*"
                                    maxFiles={1}
                                    onChange={updateFiles}
                                >
                                    {soundFile.map((file, i) => (
                                        <FileMosaic key={i} {...file} preview />
                                    ))}
                                </Dropzone>
                            </div>
                        </Card>
                        <Card variant="outlined" style={{ padding: "16px", marginTop: "16px" }}>
                            <div>Đề thi {location.state?.examName}</div>
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
                        <Card variant="outlined" style={{ padding: "16px", marginTop: "16px" }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <Button
                                    variant="contained"
                                    onClick={(e) => {
                                        submitExam();
                                    }}
                                >
                                    Nộp đề
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default ExamCreationPage;
