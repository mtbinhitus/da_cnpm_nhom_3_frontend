import React, { useEffect, useState } from 'react';
import { CloseSquareOutlined } from '@ant-design/icons';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { OutlinedInput } from '@mui/material';
import { Modal, Select, Divider, Button } from 'antd';
import Swal from 'sweetalert2';
import { getCollections, createCollection, createExam } from '../../../services/examService';

export default function CreateExam(props) {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [colections, setColections] = useState([]);
    const [nameColec, setNameColect] = useState('');
    const [render, setRender] = useState(false);
    const [choiceColec, setChoiceColect] = useState('');
    const [nameExam, setNameExam] = useState('');
    const handleCancel = () => {
        setIsModalVisible(false);
        props.onData();
    };

    useEffect(() => {
        getCollections().then((res) => {
            setColections(res.body);
        });
        setRender(false);
    }, [render]);

    function addColection() {
        createCollection(nameColec).then((res) => {
            setNameColect('');
            if (res.status === 200) {
                setRender(true);
                setNameColect('');
            } else {
                console.log('Fail');
            }
        });
    }
    function createNewExam() {
        createExam(choiceColec, nameExam).then((res) => {
            setNameColect('');
            console.log(res);
            if (res.status === 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                });
                handleCancel();
                props.onRender();
                props.useNavigate(`/admin/exams/${res.data.body.id}`, {
                    state: {
                        examId: res.data.body.id,
                        examName: res.data.body.name,
                    },
                    replace: true,
                });
            } else {
                console.log('Fail');
            }
        });
    }

    return (
        <>
            <Modal
                className="view-information"
                closable={true}
                onCancel={handleCancel}
                maskStyle={{ opacity: 0.1 }}
                footer={false}
                destroyOnClose={false}
                maskClosable={false}
                visible={isModalVisible}
                style={{ textAlign: 'center' }}
                closeIcon={<CloseSquareOutlined />}
            >
                <h2
                    style={{
                        textAlign: 'left',
                        color: 'black',
                        fontWeight: '700',
                        marginLeft: '10px',
                        fontSize: '20px',
                    }}
                >
                    Tạo đề mới
                </h2>
                <h2 style={{ textAlign: 'left' }}>
                    <TextField
                        label="Tên đề"
                        id="outlined-size-small"
                        value={nameExam}
                        size="small"
                        onChange={(e) => {
                            setNameExam(e.target.value);
                        }}
                        fullWidth
                        style={{
                            height: '1.1rem !important',
                            color: '#0C5182',
                            marginLeft: '10px',
                            marginTop: '10px',
                            border: '1px',
                        }}
                    />
                </h2>
                <h2 style={{ textAlign: 'left' }}>
                    <FormControl
                        fullWidth
                        size="small"
                        style={{
                            height: '2.9rem !important',
                            color: '#0C5182',
                            marginLeft: '10px',
                            marginTop: '10px',
                            border: '1px',
                        }}
                    >
                        <InputLabel id="demo-multiple-name-label"></InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            defaultValue="Colection"
                            onChange={(e) => {
                                setChoiceColect(e);
                            }}
                            input={<OutlinedInput label="Name" />}
                            dropdownRender={(menu) => (
                                <>
                                    {menu}
                                    <Divider
                                        style={{
                                            margin: '8px 0',
                                        }}
                                    />
                                    <h2
                                        style={{
                                            fontSize: '1rem',
                                            marginBottom: '5px',
                                            marginTop: '5px',
                                            fontWeight: '500',
                                            textAlign: 'left',
                                            color: 'blue',
                                        }}
                                    >
                                        <TextField
                                            label="Tên Colection"
                                            id="outlined-size-small"
                                            value={nameColec}
                                            onChange={(e) => {
                                                setNameColect(e.target.value);
                                            }}
                                            size="small"
                                            style={{
                                                height: '1.1rem !important',
                                                color: '#0C5182',
                                                borderColor: '#0C5182',
                                                paddingRight: '10px',
                                            }}
                                        />
                                        {nameColec.length === 0 ? (
                                            <Button
                                                disabled
                                                style={{
                                                    background: '#0C5182',
                                                    borderRadius: '8px',
                                                    borderColor: '#0C5182',
                                                    border: '1px solid #0C5182',
                                                    height: '2.5rem',
                                                }}
                                            >
                                                <h2 style={{ fontSize: '0.8rem', fontWeight: '500', color: 'white' }}>
                                                    Thêm
                                                </h2>
                                            </Button>
                                        ) : (
                                            <Button
                                                style={{
                                                    background: '#0C5182',
                                                    borderRadius: '8px',
                                                    borderColor: '#0C5182',
                                                    border: '1px solid #0C5182',
                                                    height: '2.5rem',
                                                }}
                                                onClick={addColection}
                                            >
                                                <h2 style={{ fontSize: '0.8rem', fontWeight: '500', color: 'white' }}>
                                                    Thêm
                                                </h2>
                                            </Button>
                                        )}
                                    </h2>
                                </>
                            )}
                        >
                            {colections.length === 0 ? (
                                <></>
                            ) : (
                                <>
                                    {colections.map((colec) => (
                                        <MenuItem key={colec.id} value={colec.id}>
                                            {colec.name}
                                        </MenuItem>
                                    ))}
                                </>
                            )}
                        </Select>
                        <div style={{ textAlign: 'right' }}>
                            {(nameExam.length && choiceColec.length) === 0 ? (
                                <Button
                                    disabled
                                    style={{
                                        marginTop: '25px',
                                        background: '#0C5182',
                                        borderRadius: '8px',
                                        borderColor: '#0C5182',
                                        border: '1px solid #0C5182',
                                        height: '1.5rem',
                                    }}
                                >
                                    <h2 style={{ fontSize: '0.8rem', fontWeight: '500', color: 'white' }}>Tạo đề</h2>
                                </Button>
                            ) : (
                                <Button
                                    style={{
                                        marginTop: '25px',
                                        background: '#0C5182',
                                        borderRadius: '8px',
                                        borderColor: '#0C5182',
                                        border: '1px solid #0C5182',
                                        height: '1.5rem',
                                    }}
                                    onClick={createNewExam}
                                >
                                    <h2 style={{ fontSize: '0.8rem', fontWeight: '500', color: 'white' }}>Tạo đề</h2>
                                </Button>
                            )}
                        </div>
                    </FormControl>
                </h2>
            </Modal>
        </>
    );
}
