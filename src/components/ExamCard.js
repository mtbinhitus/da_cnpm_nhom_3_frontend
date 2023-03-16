import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ExamCard(props) {
    const examId = 1;
    return (
        <div className="card" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="card-body">
                <h2 className="card-title" style={{ fontSize: "1.02rem", fontWeight: "600" }}>
                    {props.name}
                </h2>
                <div>
                    <div>
                        <span
                            style={{
                                display: "inline-block",
                                fontSize: ".9rem",
                                color: "#677788",
                                fontWeight: 500,
                                lineHeight: "1.4",
                            }}
                        >
                            Bộ đề thi: {props.category}
                        </span>
                    </div>
                    <div>
                        <span
                            style={{
                                display: "inline-block",
                                fontSize: ".9rem",
                                color: "#677788",
                                fontWeight: 500,
                                lineHeight: "1.4",
                            }}
                        >
                            <AccessTimeIcon />
                            <span>120 phút | </span>
                            <PersonOutlineOutlinedIcon />
                            <span>{props.joined} | </span>
                            <QuestionAnswerOutlinedIcon />
                            <span>{props.cmt}</span>
                        </span>
                    </div>
                    <div>
                        <span
                            style={{
                                display: "inline-block",
                                fontSize: ".9rem",
                                color: "#677788",
                                fontWeight: 500,
                                lineHeight: "1.4",
                            }}
                        >
                            <span> 7 phần thi | 120 câu hỏi</span>
                        </span>
                    </div>
                </div>
                <div className="d-grid mt-3">
                    <Link to={`/exam-detail/${examId}`} style={{ textDecoration: "none" }}>
                        <Button variant="outlined">
                            <span className="fw-bold">Chi tiết</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ExamCard;
