import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import '../../style/PracticePage.css';

const ChoicePractice = (props) => {
    return (
        <>
            <Checkbox defaultChecked color="default" style={{ margin: 0 }} />
            <span style={{ fontSize: '18px' }}>{props?.name}</span>
            <div className="list-tag">
                {props?.list?.map((data, index) => (
                    <span key={index} className="tag name">
                        #{data.name}
                    </span>
                ))}
            </div>
        </>
    );
};
export default ChoicePractice;
