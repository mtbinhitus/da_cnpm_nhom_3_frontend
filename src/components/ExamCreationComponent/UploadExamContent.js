import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import Part1Question from "./Part1Question";
import { set } from "immutable";

const UploadExamContent = ({
    children,
    singleQList,
    addFunc,
    setFunc,
    setNumberQ,
    saveList,
    previewFile,
    setPreviewFile,
}) => {
    var count = 0;
    const handleKeyofList = () => {
        switch (singleQList.type) {
            case "part1":
                return 1;
            case "part2":
                // code block
                return 7;
            case "part3":
                // code block
                return 32;
            case "part4":
                return 71;
                return;
            case "part5":
                // code block
                return 101;
            case "part6":
                return 131;

            case "part7":
                return 147;
        }
    };
    const checkPart = () => {
        switch (singleQList.type) {
            case "part1":
                return false;
            case "part2":
                // code block
                return false;
            case "part3":
                // code block
                return false;
            case "part4":
                return false;
            case "part5":
                // code block
                return false;
            case "part6":
                return true;
            case "part7":
                return true;
        }
    };
    const increaseCount = () => {
        count++;
        return count;
    };
    return (
        <>
            {singleQList.questionClusters.map((value, index) => (
                <Card
                    key={index + handleKeyofList()}
                    variant="outlined"
                    style={{ padding: "16px", marginTop: "16px", backgroundColor: "#ECF9FF" }}
                >
                    {React.cloneElement(children, {
                        index: index + 1,
                        singleQList: singleQList,
                        setFunc: setFunc,
                        setNumberQ: setNumberQ,
                        question: value,
                        increaseCount: increaseCount,
                        part: singleQList.type,
                        previewFile: previewFile,
                        setPreviewFile: setPreviewFile,
                    })}
                </Card>
            ))}
            <div className="mt-3 d-flex">
                <Button className="mt-10 w-100 ml-1" variant="outlined" onClick={(e) => saveList(singleQList, setFunc)}>
                    Lưu toàn bộ câu hỏi
                </Button>
                <div className="m-2"></div>
                <Button className="mt-10 w-100 mr-1" variant="outlined" onClick={(e) => addFunc(singleQList, setFunc)}>
                    {singleQList.type == "part6" || singleQList.type == "part7" ? "Thêm cụm câu hỏi" : "Thêm câu hỏi"}
                </Button>
            </div>
        </>
    );
};

export default UploadExamContent;