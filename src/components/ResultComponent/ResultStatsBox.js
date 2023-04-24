import React from 'react';
import styled from '@emotion/styled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DoneIcon from '@mui/icons-material/Done';
import { Card } from '@mui/material';

const ResultStatsBox = () => {
    const MyCard = styled(Card)({
        backgroundColor: '#eff0f5',
        width: '200px',
        padding: 3,
        textAlign: 'start',
        alignItems: 'center',
    });
    return (
        <>
            <MyCard>
                <div style={{ padding: '5px', alignItems: 'center', display: 'flex' }}>
                    <DoneIcon /> Kết quả làm bài
                </div>
                <div style={{ padding: '5px', alignItems: 'center', display: 'flex' }}>
                    <AutoGraphIcon /> Độ chính xác
                </div>
                <div style={{ padding: '5px', alignItems: 'center', display: 'flex' }}>
                    <AccessTimeIcon /> Thời gian hoàn thành
                </div>
            </MyCard>
        </>
    );
};
export default ResultStatsBox;
