import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import '../../style/ResultAnswerItem.scss';

const ResultAnswerItem = ({ questionNumber, keyAnswer, examineeAnswer }) => {
    return (
        <>
            <div className="answer-wapper">
                <div className="question-number">
                    <strong>{questionNumber}</strong>
                </div>
                <div className="key-answer" style={{ marginRight: '5px' }}>
                    {keyAnswer}:
                </div>
                <div
                    className={keyAnswer === examineeAnswer ? 'examinee-answer' : 'examinee-answer incorrect'}
                    style={{ marginRight: '5px' }}
                >
                    {examineeAnswer || 'Chưa trả lời'}
                </div>
                <div className="check-answer-icon">
                    {keyAnswer === examineeAnswer ? (
                        <DoneIcon fontSize={'small'} color="success" />
                    ) : (
                        <CloseIcon fontSize={'small'} color="error" />
                    )}
                </div>
            </div>
        </>
    );
};
export default ResultAnswerItem;
