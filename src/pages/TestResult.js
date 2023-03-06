import { Grid } from "@mui/material";
import ResultContent from "../components/ResultComponent/ResultContent";

const TestResult = () => {
    return (
        <>
            <Grid className="" container spacing={2}>
                <Grid item xs={9}>
                    <div>
                        <ResultContent />
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div>hohoho</div>
                </Grid>
            </Grid>
        </>
    );
};
export default TestResult;
