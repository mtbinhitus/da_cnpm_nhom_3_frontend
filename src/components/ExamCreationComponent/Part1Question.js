import React, { useEffect, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { Dropzone, FileMosaic } from '@files-ui/react';
import { FormControlLabel, Grid, IconButton, Radio, RadioGroup, FormControl, TextField } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import QuestionModel from '../../models/question';
import uploadFileFunc from '../../services/uploadFile';

// import Dropzone from "react-dropzone";
// import { useDropzone } from "react-dropzone";

const Part1Question = ({ index, question, setFunc, part, previewFile, setPreviewFile, singleQList }) => {
    const [optionA, setOptionA] = useState(question.questions[0].options.a);
    const [optionB, setOptionB] = useState(question.questions[0].options.b);
    const [optionC, setOptionC] = useState(question.questions[0].options.c);
    const [optionD, setOptionD] = useState(question.questions[0].options.d);
    const [correctOption, setCorrectOption] = useState(question.questions[0].correctOption);
    const [explain, setExplain] = useState(question.questions[0].explain);
    const [materialUrl, setMaterialUrl] = useState();

    const updateFiles = async (incommingFiles) => {
        // incommingFiles[0]?.name = "hello.jpg";
        const previewClone = cloneDeep(previewFile);
        if (typeof previewClone.part1[index - 1] === 'undefined') previewClone.part1.push(incommingFiles);
        else previewClone.part1[index - 1] = incommingFiles;
        setPreviewFile(previewClone);
        console.log(incommingFiles);
        const imageUrl = [];

        /* eslint-disable no-await-in-loop */
        for (let i = 0; i < incommingFiles.length; i++) {
            const nameFile = `${part}_${index}_${i}`;
            const newFile = new File([incommingFiles[i].file], nameFile, { type: incommingFiles[i].type });
            const url = await uploadFileFunc(newFile);
            if (typeof url !== 'undefined') imageUrl.push(url);
            console.log(url);
        }
        /* eslint-disable no-await-in-loop */

        setMaterialUrl(imageUrl);
    };

    console.log();
    const updateDetailQuestion = () => {
        question.questions[0] = QuestionModel(index, optionA, optionB, optionC, optionD, correctOption, explain, null);
        const clone = cloneDeep(singleQList);
        setFunc(clone);
    };
    useEffect(() => {
        updateDetailQuestion();
    }, [optionA, optionB, optionC, optionD, correctOption, explain]);

    const updateFilesUrl = () => {
        const clone = cloneDeep(singleQList);
        clone.questionClusters[index - 1].material = materialUrl;
        setFunc(clone);
    };

    useEffect(() => {
        updateFilesUrl();
    }, [materialUrl]);
    return (
        <>
            <div className="d-flex justify-content-between">
                <div>Câu {index}</div>
                <IconButton size="medium" color="error">
                    <HighlightOffIcon></HighlightOffIcon>
                </IconButton>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div>Lựa chọn</div>
                    <FormControl>
                        <Grid container columnSpacing={3} rowSpacing={10}>
                            <Grid item xs={1}>
                                <RadioGroup
                                    value={correctOption}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        style={{ marginTop: '5px' }}
                                        value="a"
                                        key={'a'}
                                        control={<Radio />}
                                        label="a"
                                        onClick={() => {
                                            setCorrectOption('a');
                                        }}
                                    />
                                    <FormControlLabel
                                        style={{ marginTop: '5px' }}
                                        value="b"
                                        key={'b'}
                                        control={<Radio />}
                                        label="b"
                                        onClick={() => {
                                            setCorrectOption('b');
                                        }}
                                    />
                                    <FormControlLabel
                                        style={{ marginTop: '5px' }}
                                        value="c"
                                        key={'c'}
                                        control={<Radio />}
                                        label="c"
                                        onClick={() => {
                                            setCorrectOption('c');
                                        }}
                                    />
                                    <FormControlLabel
                                        style={{ marginTop: '5px' }}
                                        value="d"
                                        control={<Radio />}
                                        label="d"
                                        key={'d'}
                                        onClick={() => {
                                            setCorrectOption('d');
                                        }}
                                    />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={11}>
                                <TextField
                                    style={{ marginTop: '7px', width: '100%' }}
                                    id="outlined-basic"
                                    value={optionA}
                                    size="small"
                                    label=""
                                    variant="outlined"
                                    onChange={(e) => {
                                        setOptionA(e.target.value);
                                    }}
                                />
                                <TextField
                                    style={{ marginTop: '7px', width: '100%' }}
                                    id="outlined-basic"
                                    value={optionB}
                                    size="small"
                                    label=""
                                    variant="outlined"
                                    onChange={(e) => {
                                        setOptionB(e.target.value);
                                    }}
                                />
                                <TextField
                                    style={{ marginTop: '7px', width: '100%' }}
                                    id="outlined-basic"
                                    size="small"
                                    value={optionC}
                                    label=""
                                    variant="outlined"
                                    onChange={(e) => {
                                        setOptionC(e.target.value);
                                    }}
                                />
                                <TextField
                                    style={{ marginTop: '7px', width: '100%' }}
                                    id="outlined-basic"
                                    size="small"
                                    value={optionD}
                                    label=""
                                    variant="outlined"
                                    onChange={(e) => {
                                        setOptionD(e.target.value);
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <div className="mt-2 mb-2">Giải thích</div>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            minRows={4}
                            variant="outlined"
                            value={explain}
                            onChange={(e) => {
                                setExplain(e.target.value);
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Dropzone key={index} accept="image/*" maxFiles={1} onChange={updateFiles}>
                        {previewFile.part1[index - 1]?.map((file, i) => (
                            <FileMosaic key={i} {...file} preview />
                        ))}
                    </Dropzone>
                </Grid>
            </Grid>
        </>
    );
};
export default Part1Question;
