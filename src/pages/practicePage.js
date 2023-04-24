import React from 'react';
import { Card, Grid } from '@mui/material';
import HeaderContaint from '../components/PracticeComponent/HeaderContent';
import PracticeContent from '../components/PracticeComponent/PracticeContent';

const PracticePage = () => {
    return (
        <>
            <Grid style={{ justifyContent: 'center' }} container>
                <Grid item xs={9}>
                    <div style={{ width: '100' }}>
                        <Card style={{ padding: '16px', marginTop: '16px' }}>
                            <HeaderContaint />
                            <PracticeContent />
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};
export default PracticePage;
