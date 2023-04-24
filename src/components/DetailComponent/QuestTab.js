import React from 'react';
import Question from './Question';

export default function QuestTab(props) {
    if (props.listExam === undefined) return <p>Loading...</p>;
    return (
        <div>
            {props.listQuestion.map((value, index) => (
                <Question question={value} index={index} listExam={props.listExam} />
            ))}
        </div>
    );
}
