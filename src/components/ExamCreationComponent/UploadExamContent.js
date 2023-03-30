import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import Part1Question from "./Part1Question";
import { set } from "immutable";

const UploadExamContent = ({ children, singleQList, addFunc, setFunc, setNumberQ }) => {
    return (
        <>
            {singleQList.questionClusters.map((value, index) => (
                <Card key={index} variant="outlined" style={{ padding: "16px", marginTop: "16px" }}>
                    {React.cloneElement(children, {
                        index: index + 1,
                        singleQList: singleQList,
                        setFunc: setFunc,
                        setNumberQ: setNumberQ,
                    })}
                </Card>
            ))}
            <div className="mt-3">
                <Button className="mt-10 w-100" variant="outlined" onClick={(e) => addFunc(singleQList, setFunc)}>
                    Thêm câu hỏi
                </Button>
            </div>
        </>
    );
};

export default UploadExamContent;
