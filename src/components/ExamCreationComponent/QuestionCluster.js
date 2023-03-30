import { SafetyDividerOutlined } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import Part3Question from "./Part3Question";

const QuestionCluster = ({ index }) => {
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
    return (
        <>
            <Part3Question index={part3Index}></Part3Question>
            <hr className="mt-3 mb-3" />
            <Part3Question index={part3Index + 1}></Part3Question>
            <hr className="mt-3 mb-3" />

            <Part3Question index={part3Index + 2}></Part3Question>
            <hr className="mt-3 mb-3" />

            <div>
                <UploadDropzone
                    uploader={uploader}
                    options={options}
                    onUpdate={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
                    width="100%"
                    height="150px"
                />
            </div>
        </>
    );
};
export default QuestionCluster;
