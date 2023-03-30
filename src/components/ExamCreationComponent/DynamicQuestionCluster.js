import { SafetyDividerOutlined } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { cloneDeep } from "lodash";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import Part3Question from "./Part3Question";

const DynamicQuestionCluster = ({ index, singleQList, setFunc, setNumberQ }) => {
    const part3Index = index * 2 + (index - 2);
    const uploader = Uploader({
        apiKey: `${process.env.REACT_APP_FILE_PICKER_KEY}`,
    });
    const options = {
        multi: false,
        styles: {
            fontSizes: {
                base: 14,
            },
        },
    };

    const addQuestion = (questionList) => {
        var clone = cloneDeep(questionList);
        clone.questionClusters[index - 1].questions.push(clone.size + 1);
        clone.size = clone.size + 1;
        setNumberQ(clone.size);
        setFunc(clone);
    };

    return (
        <>
            <div>
                <UploadDropzone
                    uploader={uploader}
                    options={options}
                    onUpdate={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
                    width="100%"
                    height="150px"
                />
            </div>
            <hr className="mt-3 mb-3" />
            {singleQList.questionClusters[index - 1].questions.map((value, indexArray) => (
                <div key={value}>
                    <Part3Question index={value}></Part3Question>
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
