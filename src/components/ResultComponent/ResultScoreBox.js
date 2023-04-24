import React from 'react';
import styled from '@emotion/styled';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Card } from '@mui/material';

const ResultScoreBox = ({ boxType, numberAnswer }) => {
    let boxName = '';
    const getIconOfBox = () => {
        if (boxType === 'correctType') {
            boxName = 'Trả lời đúng';
            return (
                <>
                    <CheckCircleIcon style={{ color: 'green' }} />
                </>
            );
        } else if (boxType === 'IncorrectType') {
            boxName = 'Trả lời sai';
            return (
                <>
                    <CancelIcon style={{ color: 'red' }} />
                </>
            );
        } else {
            boxName = 'Bỏ qua';
            return (
                <>
                    <RemoveCircleIcon style={{ color: 'grey' }} />
                </>
            );
        }
    };

    const MyCard = styled(Card)({
        width: '200px',
        height: '177px',
        padding: 16,
        textAlign: 'center',
    });

    return (
        <>
            <MyCard className="result-score-box">
                <div>{getIconOfBox()}</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{boxName}</div>
                <div style={{ fontSize: '23px', fontWeight: 'bold' }}>{numberAnswer}</div>
                <div style={{ fontSize: '16px' }}>Câu hỏi</div>
            </MyCard>
        </>
    );
};
export default ResultScoreBox;
