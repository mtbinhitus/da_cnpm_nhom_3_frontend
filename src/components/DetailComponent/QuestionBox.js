// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import { Box, Button, Typography } from '@mui/material';
// import { React, useState } from 'react';

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// export default function QuestionBox(props) {
//     const [value, setValue] = useState(0);
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     if (props.listExam === undefined) return <p>Loading...</p>;
//     return (
//         <div>
//             {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//                 <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                     {props.listPart.map((value, index) => (
//                         <Tab label={"Part " + value.partNumber} key={index} {...a11yProps(index)} />
//                     ))}
//                 </Tabs>
//             </Box>
//             {props.listPart.map((item, index) => (
//                 <TabPanel value={value} index={index}>
//                     <QuestTab key={index} listQuestion={item.listQuestion} listExam={props.listExam} />
//                 </TabPanel>
//             ))} */}
//             <div style={{ display: 'flex', justifyContent: 'flex-end' }} maxWidth="sm">
//                 <Button variant="text" endIcon={<NavigateNextIcon />}>
//                     Tiếp theo
//                 </Button>
//             </div>
//         </div>
//     );
// }
