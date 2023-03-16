import { Grid } from "@mui/material";
import React from "react";
import HomepageContent from "../components/HomepageComponent/HomepageContent";

function Homepage() {
    // const perro = "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp";
    // const perro2 = "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp";

    return (
        <>
            <Grid style={{ justifyContent: "center" }} container>
                <Grid item xs={9}>
                    <div style={{ width: "100" }}>
                        <HomepageContent />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Homepage;
