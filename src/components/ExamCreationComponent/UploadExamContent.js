import { Button, Card } from '@mui/material';
import React from 'react';

const UploadExamContent = ({ children, singleQList, addFunc, setFunc, setNumberQ, previewFile, setPreviewFile }) => {
    let count = 0;
    const handleKeyofList = () => {
        switch (singleQList.type) {
            case 'part1':
                return 1;
            case 'part2':
                // code block
                return 7;
            case 'part3':
                // code block
                return 32;
            case 'part4':
                return 71;
            case 'part5':
                // code block
                return 101;
            case 'part6':
                return 131;

            case 'part7':
                return 147;
            default:
                return null;
        }
    };

    const increaseCount = () => {
        count++;
        return count;
    };
    return (
        <>
            {singleQList.questionClusters.map((value, index) => (
                <Card
                    key={index + handleKeyofList()}
                    variant="outlined"
                    style={{ padding: '16px', marginTop: '16px', backgroundColor: '#ECF9FF' }}
                >
                    {React.cloneElement(children, {
                        index: index + 1,
                        singleQList,
                        setFunc,
                        setNumberQ,
                        question: value,
                        increaseCount,
                        part: singleQList.type,
                        previewFile,
                        setPreviewFile,
                    })}
                </Card>
            ))}
            <div className="mt-3 d-flex">
                <div className="m-2"></div>
                <Button className="mt-10 w-100 mr-1" variant="outlined" onClick={() => addFunc(singleQList, setFunc)}>
                    {singleQList.type === 'part6' || singleQList.type === 'part7' ? 'Thêm cụm câu hỏi' : 'Thêm câu hỏi'}
                </Button>
            </div>
        </>
    );
};

export default UploadExamContent;
