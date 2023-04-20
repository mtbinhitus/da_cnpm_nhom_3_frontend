import React, { useState, useEffect } from "react";
import { Grid, Card } from "@mui/material";

export default function DetailContent(props) {
    console.log("DetailContent");
    console.log(props.exam);
    if (props.exam === undefined) return <p>Loading...</p>;

    return (
        <>
            <Grid container spacing={2} mt={4}>
                <Grid p={2} item xs={12} mb={2}>
                  lay1
                </Grid>
                <Grid p={2} item xs={12} mb={2}>
                  lay2
                </Grid>
            </Grid>
        </>
    );
}
