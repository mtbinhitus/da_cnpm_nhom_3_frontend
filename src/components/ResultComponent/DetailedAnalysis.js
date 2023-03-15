import { Box, Fab, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import AnalysisTable from "./AnalysisTable";
const DetailedAnalysis = () => {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
                textColor="black"
                value={value}
                onChange={(e, value) => setValue(value)}
                aria-label="basic tabs example"
            >
                <Tab style={{ textTransform: "none", fontSize: "16px" }} label="Part 1">
                    <Fab variant="extended">Navigate</Fab>
                </Tab>
                <Tab style={{ textTransform: "none", fontSize: "16px" }} label="Part 2" />
                <Tab style={{ textTransform: "none", fontSize: "16px" }} label="Part 3" />
                <Tab style={{ textTransform: "none", fontSize: "16px" }} label="Part 4" />
                <Tab style={{ textTransform: "none", fontSize: "16px" }} label="Part 5" />
                <Tab style={{ textTransform: "none", fontSize: "16px" }} label="Part 6" />
                <Tab style={{ textTransform: "none", fontSize: "16px" }} label="Part 7" />
                <Tab style={{ textTransform: "none", fontSize: "16px" }} label="Tổng quát" />
            </Tabs>
            <hr />
            <AnalysisTable />
        </Box>
    );
};

export default DetailedAnalysis;
