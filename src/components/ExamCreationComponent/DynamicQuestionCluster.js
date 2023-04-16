import { SafetyDividerOutlined } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import Part3Question from "./Part3Question";
import QuestionModel from "../../models/question";
import { useState } from "react";
import cloneDeep from "lodash/cloneDeep";
import { Dropzone, FileMosaic } from "@files-ui/react";

const DynamicQuestionCluster = ({
    index,
    singleQList,
    setFunc,
    setNumberQ,
    question,
    increaseCount,
    files,
    setFiles,
    part,
    previewFile,
    setPreviewFile,
}) => {
    const [fileList, setFileList] = useState([]);

    const updateFiles = (incommingFiles) => {
        // incommingFiles[0]?.name = "hello.jpg";
        var previewClone = cloneDeep(previewFile);
        if (part === "part6") previewClone.part6.push(incommingFiles);
        else previewClone.part7.push(incommingFiles);
        setPreviewFile(previewClone);
        console.log(files);
        var clone = cloneDeep(files);
        for (let i = 0; i < incommingFiles.length; i++) {
            const nameFile = `${part}_${index}_${i}`;
            var newFile = new File([incommingFiles[i].file], nameFile, { type: incommingFiles[i].type });
            const duplicateIndex = clone.findIndex((e) => e.name == nameFile);
            console.log(duplicateIndex);
            if (duplicateIndex === -1) {
                clone.push(newFile);
            } else {
                clone[duplicateIndex] = newFile;
                break;
            }
            // const newFile = new File([incommingFiles[0].file.slice()], "newFileName.txt", { type: incommingFiles[0].file.type });
        }
        setFiles(clone);
        console.log(clone);
    };
    const addQuestion = (questionList) => {
        var clone = questionList;
        clone.questionClusters[index - 1].questions.push(QuestionModel(clone.size + 1, "", "", "", "", "", ""));
        clone.size = clone.size + 1;
        setNumberQ(clone.size);
        setFunc(clone);
    };

    return (
        <>
            <div>
                <Dropzone onChange={updateFiles} value={files}>
                    {part === "part6"
                        ? previewFile.part6[index - 1]?.map((file, i) => <FileMosaic key={i} {...file} preview />)
                        : previewFile.part7[index - 1]?.map((file, i) => <FileMosaic key={i} {...file} preview />)}
                </Dropzone>
            </div>
            <hr className="mt-3 mb-3" />
            {singleQList.questionClusters[index - 1].questions.map((value, indexArray) => (
                <div key={indexArray}>
                    <Part3Question index={value.id} question={question} indexInCluster={indexArray}></Part3Question>
                    <hr className="mt-3 mb-3" />
                </div>
            ))}
            <div className="mt-3">
                <Button
                    className="mt-10 w-100"
                    variant="contained"
                    onClick={(e) => {
                        addQuestion(singleQList);
                    }}
                >
                    Thêm câu hỏi
                </Button>
            </div>
        </>
    );
};
export default DynamicQuestionCluster;
