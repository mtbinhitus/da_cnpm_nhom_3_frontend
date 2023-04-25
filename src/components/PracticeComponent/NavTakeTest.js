import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import '../../style/PracticePage.css';

const NavTakeTest = () => {
    const examId = useParams();
    return (
        <>
            <div className="alert-warning">
                <div className="tab-content" style={{ fontSize: '18px' }}>
                    <span>
                        <ErrorOutlineIcon />
                    </span>
                    <span>
                        {' '}
                        Sẵn sàng để bắt đầu làm full test? Để đạt được kết quả tốt nhất, bạn cần dành ra 120 phút cho
                        bài test này.
                    </span>
                </div>
            </div>
            <Link to={`/exam-detail/${examId.examId}/start`} style={{ textDecoration: 'none' }}>
                <Button
                    size="small"
                    variant="contained"
                    style={{
                        marginRight: '5px',
                        backgroundColor: '#35509 !important',
                        borderColor: ' #35509a',
                        fontSize: '18px',
                        marginTop: '15px',
                    }}
                >
                    BẮT ĐẦU THI
                </Button>
            </Link>
        </>
    );
};
export default NavTakeTest;
