import { Button, Card } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import styled from "@emotion/styled";

const ResultScoreBox = ({ boxType, numberAnswer }) => {
    const getIconOfBox = (boxType) => {
        if (boxType === "correctType")
            return (
                <>
                    <CheckCircleIcon style={{ color: "green" }} />
                </>
            );
        else if (boxType === "IncorrectType")
            return (
                <>
                    <CancelIcon style={{ color: "red" }} />
                </>
            );
        else
            return (
                <>
                    <RemoveCircleIcon style={{ color: "grey" }} />
                </>
            );
    };

    const MyCard = styled(Card)({
        width: "200px",
        height: "177px",
        padding: 16,
        textAlign: "center",
    });

    return (
        <>
            <MyCard className="result-score-box">
                <div>{getIconOfBox(boxType)}</div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>Trả lời đúng</div>
                <div style={{ fontSize: "23px", fontWeight: "bold" }}>{numberAnswer}</div>
                <div style={{ fontSize: "16px" }}>Câu hỏi</div>
            </MyCard>
        </>
    );
};
export default ResultScoreBox;
