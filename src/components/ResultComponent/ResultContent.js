import React from 'react';
import { Button, Card } from '@mui/material';
import { Link, useParams, useLocation } from 'react-router-dom';
import '../../style/ResultContent.css';
import ResultScoreBox from './ResultScoreBox';
import ResultStatsBox from './ResultStatsBox';

const ResultContent = () => {
    const { state } = useLocation();
    const examId = useParams();
    console.log(state);
    console.log(examId);

    return (
        <>
            <Card style={{ padding: '16px' }}>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '16px' }}>Kết quả thi toeic</h2>
                <div>
                    <div style={{ marginBottom: '16px' }}>
                        <Button size="small" variant="contained" style={{ marginRight: '5px' }}>
                            Xem đáp án
                        </Button>
                        <Link to={`/exam-detail/${examId.examId}`} style={{ textDecoration: 'none' }}>
                            <Button size="small" variant="outlined">
                                Làm lại bài thi
                            </Button>
                        </Link>
                    </div>

                    <div className="result-score-details">
                        <ResultStatsBox />
                        <ResultScoreBox numberAnswer={state.lScore} boxType={'correctType'} />
                        <ResultScoreBox numberAnswer={state.rScore} boxType={'IncorrectType'} />
                        <ResultScoreBox numberAnswer={state.lScore + state.rScore} />
                    </div>
                </div>
            </Card>
        </>
    );
};
export default ResultContent;
