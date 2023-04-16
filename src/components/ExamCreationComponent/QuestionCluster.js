import { SafetyDividerOutlined } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import Part3Question from "./Part3Question";
import { Dropzone, FileMosaic } from "@files-ui/react";
import cloneDeep from "lodash/cloneDeep";
import { useState } from "react";

const QuestionCluster = ({ index, question, files, setFiles, part, previewFile, setPreviewFile }) => {
    const [fileList, setFileList] = useState([]);

    const part3Index = index * 2 + (index - 2);

    const updateFiles = (incommingFiles) => {
        // incommingFiles[0]?.name = "hello.jpg";
        var previewClone = cloneDeep(previewFile);
        if (part === "part3") previewClone.part3.push(incommingFiles);
        else previewClone.part4.push(incommingFiles);

        setPreviewFile(previewClone);
        // console.log(incommingFiles);
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
        console.log(clone);
        setFiles(clone);
    };
    return (
        <>
            <Part3Question index={part3Index} question={question} indexInCluster={0}></Part3Question>
            <hr className="mt-3 mb-3" />
            <Part3Question index={part3Index + 1} question={question} indexInCluster={1}></Part3Question>
            <hr className="mt-3 mb-3" />

            <Part3Question index={part3Index + 2} question={question} indexInCluster={2}></Part3Question>
            <hr className="mt-3 mb-3" />

            <div>
                <Dropzone onChange={updateFiles} value={files}>
                    {part === "part3"
                        ? previewFile.part3[index - 1]?.map((file, i) => <FileMosaic key={i} {...file} preview />)
                        : previewFile.part4[index - 1]?.map((file, i) => <FileMosaic key={i} {...file} preview />)}
                </Dropzone>
            </div>
        </>
    );
};
export default QuestionCluster;
