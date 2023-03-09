import { Tabs, Tab, Button, Box, Fab, } from "@mui/material";
import "../../../src/style/practicePage.css"
import { useState } from "react";
import NavTakeTest from "./NavTakeTest";
import NavPractice from './NavPractice'
const PracticeContent = () => {
    const [value, setValue] = useState(0);

    console.log(value)

    return (
        <>
            <div>
                <Box className="practice-content" sx={{ borderBottom: 1, borderColor: "divider", marginTop:"30px" }} style={{ color: "#8c98a4" }}>
                    <Tabs
                        textColor="blue"
                        value={value}
                        onChange={(e, value) => setValue(value)}
                        aria-label="basic tabs example"
                    >
                        <Tab className={value === 0 ? "active" : null} style={{ textTransform: "none", fontSize: "16px", fontWeight: 'bold' }} label="Luyen Tap" />
                        <Tab className={value && value === 1 ? "active" : null} style={{ textTransform: "none", fontSize: "16px", fontWeight: 'bold' }} label="Lam full test" />
                        <Tab className={value && value === 2 ? "active" : null} style={{ textTransform: "none", fontSize: "16px", fontWeight: 'bold' }} label="Thao luan" />
                    </Tabs>
                </Box>
               {
                value===0?
                <NavPractice/>:
                value===1?
                <NavTakeTest/>
                :<div></div>
               }
            </div>
        </>
    );
};
export default PracticeContent;
