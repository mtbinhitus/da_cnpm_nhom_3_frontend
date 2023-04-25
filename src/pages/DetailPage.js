import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailContent from '../components/DetailComponent-v2/DetailContent';
import { getExamById } from '../services/examService';

export default function DetailPage() {
    const id = useParams();
    const [detailexam, setDetailexam] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getExamById(id?.examId).then((res) => {
            setDetailexam(res.body);
            setLoading(false);
        });
    }, []);

    if(loading === true) return <>Loading</>

    return (
        <>
            <Grid style={{ justifyContent: 'center' }} container>
                <Grid item m={2} xs={12}>
                    <div style={{ width: '100' }}>
                        <DetailContent exam={detailexam} />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

// Data ảo
