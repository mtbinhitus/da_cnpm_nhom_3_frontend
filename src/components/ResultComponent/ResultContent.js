import { Button, Card } from "@mui/material";
import ResultScoreBox from "./ResultScoreBox";
import "../../style/ResultContent.css";
import ResultStatsBox from "./ResultStatsBox";
import { fontSize } from "@mui/system";
import DetailedAnalysis from "./DetailedAnalysis";
import ResultAnswerItem from "./ResultAnswerItem";
import ResultAnswerList from "./ResultAnswerList";

const ResultContent = () => {
    const value = 3;
    return (
        <>
            <Card style={{ padding: "16px" }}>
                <h2 style={{ fontSize: "1.6rem", marginBottom: "16px" }}>Kết quả thi toeic</h2>
                <div>
                    <div style={{ marginBottom: "16px" }}>
                        <Button size="small" variant="contained" style={{ marginRight: "5px" }}>
                            Xem đáp án
                        </Button>
                        <Button size="small" variant="outlined">
                            Làm lại bài thi
                        </Button>
                    </div>

                    <div className="result-score-details">
                        <ResultStatsBox />
                        <ResultScoreBox numberAnswer={value} boxType={"correctType"} />
                        <ResultScoreBox numberAnswer={value} boxType={"IncorrectType"} />
                        <ResultScoreBox numberAnswer={value} />
                    </div>
                </div>
                <div>
                    <h4 style={{ fontSize: "1.2rem" }}>Phân tích chi tiết</h4>
                    <DetailedAnalysis />
                </div>
                <div>
                    <h4 style={{ fontSize: "1.2rem" }}>Đáp án</h4>
                    <div>
                        <h5 style={{ fontSize: "1.1rem" }}>Part 1</h5>
                        <ResultAnswerList />
                    </div>
                    <div>
                        <h5 style={{ fontSize: "1.1rem" }}>Part 2</h5>
                        <ResultAnswerList />
                    </div>
                    <div>
                        <h5 style={{ fontSize: "1.1rem" }}>Part 3</h5>
                        <ResultAnswerList />
                    </div>
                    <div>
                        <h5 style={{ fontSize: "1.1rem" }}>Part 4</h5>
                        <ResultAnswerList />
                    </div>
                    <div>
                        <h5 style={{ fontSize: "1.1rem" }}>Part 5</h5>
                        <ResultAnswerList />
                    </div>
                    <div>
                        <h5 style={{ fontSize: "1.1rem" }}>Part 6</h5>
                        <ResultAnswerList />
                    </div>
                    <div>
                        <h5 style={{ fontSize: "1.1rem" }}>Part 7</h5>
                        <ResultAnswerList />
                    </div>
                </div>
            </Card>
        </>
    );
};
export default ResultContent;
