import React from 'react';
import styled from '@emotion/styled';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { Card, Stack } from '@mui/material';

const ResultScoreBox = ({ boxType, numberAnswer }) => {
    let boxName = '';
    const getIconOfBox = () => {
        if (boxType === 'correctType') {
            boxName = 'Listening';
            return (
                <>
                    <HeadphonesIcon style={{ color: 'green' }} />
                </>
            );
        } else if (boxType === 'IncorrectType') {
            boxName = 'Reading';
            return (
                <>
                    <LibraryBooksIcon style={{ color: 'green' }} />
                </>
            );
        } else {
            boxName = 'Total Score';
            return (
                <>
                    <DisplaySettingsIcon style={{ color: 'green' }} />
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
                <Stack spacing={1} alignItems="center" justifyContent="flex-end">
                    <div>{getIconOfBox()}</div>
                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{boxName}</div>
                    <div style={{ fontSize: '23px', fontWeight: 'bold' }}>{numberAnswer}</div>
                </Stack>
            </MyCard>
        </>
    );
};
export default ResultScoreBox;
