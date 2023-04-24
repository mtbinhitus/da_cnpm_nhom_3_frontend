import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import '../../style/practicePage.css';
import NavTakeTest from './NavTakeTest';

const PracticeContent = () => {
    const [value, setValue] = useState(0);

    console.log(value);

    return (
        <>
            <div>
                <Box
                    className="practice-content"
                    sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '30px' }}
                    style={{ color: '#8c98a4' }}
                >
                    <Tabs
                        textColor="blue"
                        value={value}
                        onChange={(e, v) => setValue(v)}
                        aria-label="basic tabs example"
                    >
                        <Tab
                            className={value === 0 ? 'active' : null}
                            style={{ textTransform: 'none', fontSize: '16px', fontWeight: 'bold' }}
                            label="Làm full test"
                        />
                        <Tab
                            className={value && value === 1 ? 'active' : null}
                            style={{ textTransform: 'none', fontSize: '16px', fontWeight: 'bold' }}
                            label="Thảo luận"
                        />
                        {/* <Tab className={value && value === 2 ? "active" : null} style={{ textTransform: "none", fontSize: "16px", fontWeight: 'bold' }} label="Thao luan" /> */}
                    </Tabs>
                </Box>
                {value === 0 ? <NavTakeTest /> : value === 1 ? <div></div> : <div></div>}
            </div>
        </>
    );
};
export default PracticeContent;
