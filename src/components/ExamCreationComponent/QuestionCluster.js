import React, { useEffect, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { Dropzone, FileMosaic } from '@files-ui/react';
import Part3Question from './Part3Question';
import uploadFileFunc from '../../services/uploadFile';

const QuestionCluster = ({ index, question, part, previewFile, setPreviewFile, singleQList, setFunc }) => {
    const [materialUrl, setMaterialUrl] = useState();

    const part3Index = index * 2 + (index - 2);

    const updateFiles = async (incommingFiles) => {
        // incommingFiles[0]?.name = "hello.jpg";
        const previewClone = cloneDeep(previewFile);
        if (part === 'part3') {
            if (typeof previewClone.part3[index - 1] === 'undefined') previewClone.part3.push(incommingFiles);
            else previewClone.part3[index - 1] = incommingFiles;
        } else {
            if (typeof previewClone.part4[index - 1] === 'undefined') previewClone.part4.push(incommingFiles);
            else previewClone.part4[index - 1] = incommingFiles;
        }

        setPreviewFile(previewClone);
        // console.log(incommingFiles);
        const imageUrl = [];
        /* eslint-disable no-await-in-loop */
        for (let i = 0; i < incommingFiles.length; i++) {
            const nameFile = `${part}_${index}_${i}`;
            const newFile = new File([incommingFiles[i].file], nameFile, { type: incommingFiles[i].type });
            const url = await uploadFileFunc(newFile);
            if (typeof url !== 'undefined') imageUrl.push(url);
            console.log(url);
            // const newFile = new File([incommingFiles[0].file.slice()], "newFileName.txt", { type: incommingFiles[0].file.type });
        }
        setMaterialUrl(imageUrl);
    };

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
            <div>
                <Dropzone onChange={updateFiles}>
                    {part === 'part3'
                        ? previewFile.part3[index - 1]?.map((file, i) => <FileMosaic key={i} {...file} preview />)
                        : previewFile.part4[index - 1]?.map((file, i) => <FileMosaic key={i} {...file} preview />)}
                </Dropzone>
            </div>
            <Part3Question
                singleQList={singleQList}
                setFunc={setFunc}
                index={part3Index}
                question={question}
                indexInCluster={0}
            ></Part3Question>
            <hr className="mt-3 mb-3" />
            <Part3Question
                singleQList={singleQList}
                setFunc={setFunc}
                index={part3Index + 1}
                question={question}
                indexInCluster={1}
            ></Part3Question>
            <hr className="mt-3 mb-3" />

            <Part3Question
                singleQList={singleQList}
                setFunc={setFunc}
                index={part3Index + 2}
                question={question}
                indexInCluster={2}
            ></Part3Question>
            <hr className="mt-3 mb-3" />
        </>
    );
};
export default QuestionCluster;
