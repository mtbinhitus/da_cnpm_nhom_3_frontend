import { Grid } from '@mui/material';
import React from 'react';
import ListContent from '../components/ListComponent/ListContent';

function TestList() {
    return (
        <>
            <Grid style={{ justifyContent: 'center' }} container>
                <Grid item xs={9}>
                    <div style={{ width: '100' }}>
                        <ListContent />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default TestList;
