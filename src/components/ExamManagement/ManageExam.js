import React, { useState, useEffect } from 'react';
import { Card, Pagination, Grid } from '@mui/material';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Button, DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../style/ManageExam.css';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { LoadingOutlined, CalendarFilled } from '@ant-design/icons';
import TableCell from '@mui/material/TableCell';
import { useNavigate } from 'react-router-dom';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import CreateExam from './createExam/CreateExam';
import { getCollections, getListExam } from '../../services/examService';

function ManageExam() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [exams, setExams] = useState();
    const [colections, setColections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [renderPage, setRenderPage] = useState(false);
    const navigate = useNavigate();
    // const role = localStorage.getItem("role");
    // console.log("TestRole")
    // console.log(role)

    const [page, setPage] = useState(0);
    const handleChange = (event, value) => {
        setLoading(true);
        console.log(value);
        setPage(value - 1);
    };

    useEffect(() => {
        if (!localStorage.getItem('role').includes('admin')) {
            navigate('/');
        }
        getListExam(page).then((res) => {
            console.log(res);
            setExams(res.body);
            setLoading(false);
        });
        getCollections().then((res) => {
            console.log(res);
            setColections(res.body);
        });
        setRenderPage(false);
    }, [page, renderPage]);

    const handleDataChange = () => {
        setIsModalVisible(false);
    };
    const handleRender = () => {
        setRenderPage(true);
    };
    // function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    //     return { name, calories, fat, carbs, protein };
    // }

    if (colections === undefined || exams === undefined || loading === true)
        return (
            <LoadingOutlined
                style={{
                    fontSize: '60px',
                    color: '#0C5182',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '30px',
                }}
            />
        );
    return (
        <>
            <Card style={{ paddingTop: '0px', padding: '35px' }}>
                <Grid container spacing={2} columns={16} style={{ paddingTop: '0px', paddingBottom: '35px' }}>
                    <Grid item xs={8}>
                        <h2 style={{ color: 'black', textAlign: 'inherit', fontWeight: '700', marginLeft: '25px' }}>
                            Quản lý đề thi
                        </h2>
                    </Grid>
                    <Grid item xs={8}>
                        <div
                            className="search_bar-create_btn-wrapper"
                            style={{ justifyContent: 'right', marginRight: '40px' }}
                        >
                            <div id="create-btn-section" style={{ justifyContent: 'right' }}>
                                <button
                                    className="btn-createExam"
                                    style={{ justifyContent: 'right' }}
                                    onClick={() => setIsModalVisible(true)}
                                >
                                    <p className="btn_create_text">Tạo đề </p>
                                </button>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div className="filter_component filter-section-exam" style={{ marginLeft: '25px' }}>
                            <div id="role-filter-section">
                                <div className="dropdown-toggle-state">
                                    <div className="dropdown-header-state">
                                        <div
                                            className="dropdown-title-state"
                                            style={{ textAlign: 'left', marginLeft: '10px' }}
                                        >
                                            Bộ đề thi
                                        </div>
                                        <div className="dropdown-icon-state" style={{ paddingTop: '0.3rem' }}>
                                            <FontAwesomeIcon icon={faFilter} />
                                        </div>
                                    </div>
                                    <div className="dropdown-content-assignment">
                                        <ul style={{ listStyleType: 'none' }}>
                                            {colections.map((item, index) => (
                                                <li key={index}>
                                                    <input
                                                        value={item.name}
                                                        type="checkbox"
                                                        name="role"
                                                        id={index}
                                                        style={{ marginTop: '12px' }}
                                                    />
                                                    <label
                                                        htmlFor={index}
                                                        style={{
                                                            paddingLeft: '10px',
                                                            display: 'flex',
                                                        }}
                                                    >
                                                        {' '}
                                                        {item.name}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="choice-date" style={{ marginRight: '140px' }}>
                            <DatePicker
                                style={{
                                    paddingTop: '0',
                                    paddingBottom: '0',
                                    paddingLeft: '10px',
                                    color: 'black',
                                    border: '0.75px solid #B5B5B5',
                                    borderRadius: ' 0.2rem',
                                    paddingRight: '10px',
                                }}
                                suffixIcon={
                                    <CalendarFilled style={{ color: 'black', background: ' #d9363e !important' }} />
                                }
                                format="DD/MM/YYYY"
                                placeholder={'Từ ngày'}
                                className="assignedform"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="choice-date" style={{ marginRight: '140px' }}>
                            <DatePicker
                                style={{
                                    paddingTop: '0',
                                    paddingBottom: '0',
                                    paddingLeft: '10px',
                                    color: 'black',
                                    border: '0.75px solid #B5B5B5',
                                    borderRadius: ' 0.2rem',
                                    paddingRight: '10px',
                                }}
                                suffixIcon={
                                    <CalendarFilled style={{ color: 'black', background: ' #d9363e !important' }} />
                                }
                                format="DD/MM/YYYY"
                                placeholder={'Đến ngày'}
                                className="assignedform"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            label="Tên đề thi"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            style={{ height: '1.1rem !important', color: '#0C5182' }}
                        />
                    </Grid>
                    <div className="col-12" style={{ justifyContent: 'center', marginTop: '40px' }}>
                        <h2
                            style={{
                                fontSize: '1rem',
                                marginBottom: '5px',
                                marginTop: '5px',
                                fontWeight: '500',
                                textAlign: 'center',
                                color: 'blue',
                            }}
                        >
                            <Button
                                style={{
                                    background: '#0C5182',
                                    borderRadius: '8px',
                                    borderColor: '#0C5182',
                                    border: '1px solid #0C5182',
                                }}
                            >
                                <h2 style={{ fontSize: '0.8rem', fontWeight: '500', color: 'white' }}>Tìm kiếm</h2>
                            </Button>

                            <Button
                                style={{
                                    marginLeft: '25px',
                                    borderRadius: '8px',
                                    borderColor: '#0C5182',
                                    border: '1px solid #0C5182',
                                }}
                            >
                                <h2 style={{ fontSize: '0.8rem', fontWeight: '500', color: '#0C5182' }}>Đặt lại</h2>
                            </Button>
                        </h2>
                    </div>
                    <div className="col-12" style={{ justifyContent: 'center', marginTop: '20px' }}>
                        <h2
                            style={{
                                color: 'black',
                                textAlign: 'inherit',
                                fontWeight: '700',
                                marginLeft: '45px',
                                fontSize: '20px',
                            }}
                        >
                            Danh sách đề thi
                        </h2>
                        <div className="Table-exam">
                            <TableContainer
                                component={Paper}
                                style={{
                                    borderColor: '#0C5182 !important',
                                    border: '3px solid #0C5182 !important',
                                    paddingTop: '25px',
                                }}
                            >
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">STT</TableCell>
                                            <TableCell align="left">Tên đề</TableCell>
                                            <TableCell align="left">Ngày Tạo</TableCell>
                                            <TableCell align="left">Người tạo</TableCell>
                                            <TableCell align="left">Bộ đề</TableCell>
                                            <TableCell align="center">Lượt thi</TableCell>
                                            <TableCell align="center">Lượt comment</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {exams.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left">{row.id}</TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="left">29/03/2023</TableCell>
                                                <TableCell align="left">khanh dinh</TableCell>
                                                <TableCell align="left">
                                                    {row.collection ? row.collection.name : ''}
                                                </TableCell>
                                                <TableCell align="center">20</TableCell>
                                                <TableCell align="center">30</TableCell>
                                                <TableCell align="center">
                                                    <EditIcon />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </Grid>
                <div>
                    {isModalVisible === false ? (
                        ''
                    ) : (
                        <CreateExam
                            useNavigate={navigate}
                            isVisible={true}
                            dataUser={[]}
                            onData={handleDataChange}
                            onRender={handleRender}
                        />
                    )}
                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <Pagination count={exams.totalPage} page={page + 1} onChange={handleChange} />
                </div>
            </Card>
        </>
    );
}

export default ManageExam;
