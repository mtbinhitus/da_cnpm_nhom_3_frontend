import React from 'react';
import { Grid } from '@mui/material';
import ResultContent from '../components/ResultComponent/ResultContent';

const TestResult = () => {
    return (
        <>
            <Grid style={{ justifyContent: 'center' }} container>
                <Grid item xs={9}>
                    <div style={{ width: '100' }}>
                        <ResultContent />
                    </div>
                </Grid>
            </Grid>
        </>
    );
};
export default TestResult;
