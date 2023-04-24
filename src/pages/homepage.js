import { Grid } from "@mui/material";
import HomepageContent from "../components/HomepageComponent/HomepageContent";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Homepage() {
    // const perro = "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp";
    // const perro2 = "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp";
    const authContext = useContext(AuthContext);
    useEffect(() => {}, []);
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
