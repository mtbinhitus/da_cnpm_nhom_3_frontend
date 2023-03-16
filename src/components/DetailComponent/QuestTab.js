import React from "react";
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
