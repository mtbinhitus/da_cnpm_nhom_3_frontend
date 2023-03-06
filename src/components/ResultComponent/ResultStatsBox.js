import { Button, Card } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import styled from "@emotion/styled";
import DoneIcon from "@mui/icons-material/Done";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const ResultStatsBox = ({ boxType, numberAnswer }) => {
    const MyCard = styled(Card)({
        backgroundColor: "#eff0f5",
        width: "200px",
        padding: 16,
        textAlign: "start",
        alignItems: "center",
    });

    return (
        <>
            <MyCard>
                <div style={{ padding: "5px", alignItems: "center", display: "flex" }}>
                    <DoneIcon /> Kết quả làm bài
                </div>
                <div style={{ padding: "5px", alignItems: "center", display: "flex" }}>
                    <AutoGraphIcon /> Độ chính xác
                </div>
                <div style={{ padding: "5px", alignItems: "center", display: "flex" }}>
                    <AccessTimeIcon /> Thời gian hoàn thành
                </div>
            </MyCard>
        </>
    );
};
export default ResultStatsBox;
