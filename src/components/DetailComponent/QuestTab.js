import React from "react";
import { Typography, Box } from "@mui/material";
import Question from "./Question";

export default function QuestTab(props) {
    return (
        <div>
            {props.listQuestion.map((value, index) => (
                <Question question={value} index={index} />
            ))}
        </div>
    );
}
