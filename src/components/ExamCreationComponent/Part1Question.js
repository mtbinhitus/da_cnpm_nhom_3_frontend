import { FormControlLabel, Grid, IconButton, Radio, RadioGroup, FormControl, TextField } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect } from "react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton, UploadDropzone } from "react-uploader";

const Part1Question = ({ index }) => {
    const uploader = Uploader({
        apiKey: `${process.env.REACT_APP_FILE_PICKER_KEY}`,
    });
    const options = {
        multi: false,
    };
    console.log();
    return (
        <>
            <div className="d-flex justify-content-between">
                <div>No. {index}</div>
                <IconButton size="medium" color="error">
                    <HighlightOffIcon></HighlightOffIcon>
                </IconButton>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div>Option</div>
                    <FormControl>
                        <Grid container columnSpacing={3} rowSpacing={10}>
                            <Grid item xs={1}>
                                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                                    <FormControlLabel
                                        style={{ marginTop: "5px" }}
                                        value="a"
                                        control={<Radio />}
                                        label="a"
                                    />
                                    <FormControlLabel
                                        style={{ marginTop: "5px" }}
                                        value="b"
                                        control={<Radio />}
                                        label="b"
                                    />
                                    <FormControlLabel
                                        style={{ marginTop: "5px" }}
                                        value="c"
                                        control={<Radio />}
                                        label="c"
                                    />
                                    <FormControlLabel
                                        style={{ marginTop: "5px" }}
                                        value="d"
                                        control={<Radio />}
                                        label="d"
                                    />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    style={{ marginTop: "7px", width: "100%" }}
                                    id="outlined-basic"
                                    size="small"
                                    label=""
                                    variant="outlined"
                                />
                                <TextField
                                    style={{ marginTop: "7px", width: "100%" }}
                                    id="outlined-basic"
                                    size="small"
                                    label=""
                                    variant="outlined"
                                />
                                <TextField
                                    style={{ marginTop: "7px", width: "100%" }}
                                    id="outlined-basic"
                                    size="small"
                                    label=""
                                    variant="outlined"
                                />
                                <TextField
                                    style={{ marginTop: "7px", width: "100%" }}
                                    id="outlined-basic"
                                    size="small"
                                    label=""
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <div className="mt-2 mb-2">Explain</div>
                        <TextField id="standard-multiline-flexible" multiline minRows={4} variant="outlined" />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <UploadDropzone
                        uploader={uploader}
                        options={options}
                        onUpdate={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
                        width="100%"
                        height="100%"
                    />
                </Grid>
            </Grid>
        </>
    );
};
export default Part1Question;
