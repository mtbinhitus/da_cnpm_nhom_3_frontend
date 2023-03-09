import { Tabs, Tab, Button, Box, Fab, } from "@mui/material";
import "../../../src/style/practicePage.css"
import { useState } from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NavTakeTest = () => {

    return (
        <>
            <div className="alert-warning">
                <div className="tab-content" style={{ fontSize: "18px" }}>
                    <span><ErrorOutlineIcon/></span>
                    <span> Sẵn sàng để bắt đầu làm full test? Để đạt được kết quả tốt nhất, bạn cần dành ra 120 phút cho bài test này.</span>
                </div>
            </div>
            <Button size="small" variant="contained" style={{ marginRight: "5px", backgroundColor: "#35509 !important", borderColor:" #35509a", fontSize: "18px", marginTop:"15px"}}>
                BẮT ĐẦU THI
            </Button>

        </>
    );
};
export default NavTakeTest