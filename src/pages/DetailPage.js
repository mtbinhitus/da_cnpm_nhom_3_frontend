import React, { useState, useEffect } from "react";
import { Grid, Card } from "@mui/material";
import DetailContent from "../components/DetailComponent-v2/DetailContent";
import { Container } from "@mui/system";
import { useParams, useNavigate } from "react-router-dom";
import { getExamById } from "../services/ExamService";
import data from '../components/DetailComponent-v2/Data.json';

export default function DetailPage() {
    const id = useParams();
    const [detailexam, setDetailexam] = useState();

    useEffect(() => {
        getExamById(id?.examId).then((res) => {
            setDetailexam(res.body);
            console.log("DetailPage");
            console.log(res.body);
        });
    }, []);

    const numberOfParts = 7;
    return (
        <>
            <Grid style={{ justifyContent: "center" }} container>
                <Grid item m={2} xs={12}>
                    <div style={{ width: "100" }}>
                        <DetailContent examId={id.examId} numberOfParts={numberOfParts} exam={data.body} />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
