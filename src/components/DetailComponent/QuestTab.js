import React from "react";
import { Typography, Box } from "@mui/material";
import Question from "./Question";

export default function QuestTab(props) {
    console.log(props.item);
    return (
        <div>
            {props.listQuestion.map((value, index) => (
                <Question question={value} index={index} />
            ))}
        </div>
    );
}
