import React from 'react';

export default function ExamPart(props) {
    return (
        <div>
            {/* <Stack justifyContent="center" spacing={2}>
                <Typography alignSelf="flex-start" variant="h6">
                    Part {props.part.partNumber}
                </Typography>
                <Grid container justifyContent="flex-start" spacing={0.5}>
                    {props.part.listQuestion.map((value, index) => (
                        <Grid key={index} xs={2.4} item> 
                            <Button variant="outlined" sx={{minWidth: "28px", height: "25px", width: "28px"}}>
                                {value.questionNumber}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Stack> */}
        </div>
    );
}
