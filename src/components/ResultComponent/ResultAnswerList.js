import { Grid } from "@mui/material";
import ResultAnswerItem from "./ResultAnswerItem";

const ResultAnswerList = () => {
    const props = [
        {
            questionNumber: 1,
            keyAnswer: "A",
            examineeAnswer: "B",
        },
        {
            questionNumber: 2,
            keyAnswer: "A",
            examineeAnswer: "",
        },
        {
            questionNumber: 3,
            keyAnswer: "A",
            examineeAnswer: "B",
        },
        {
            questionNumber: 4,
            keyAnswer: "A",
            examineeAnswer: "A",
        },
        {
            questionNumber: 5,
            keyAnswer: "A",
            examineeAnswer: "B",
        },
        {
            questionNumber: 6,
            keyAnswer: "A",
            examineeAnswer: "A",
        },
    ];
    return (
        <Grid container spacing={2}>
            {props.map((value, index) => (
                <Grid xs={6} item key={index}>
                    <ResultAnswerItem
                        questionNumber={value.questionNumber}
                        keyAnswer={value.keyAnswer}
                        examineeAnswer={value.examineeAnswer}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
export default ResultAnswerList;
