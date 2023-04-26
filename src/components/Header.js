import React, { useContext, useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../style/Header.css';

const Header = () => {
    const authContext = useContext(AuthContext);
    const [tabIndex, setTabIndex] = useState(0);
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.pathname);
    console.log(params);
    const baseUrl = 'http://localhost:3000/';

    // console.log('Header: ' + localStorage.getItem('id_token')?.toString());
    useEffect(() => {
        console.log('Header');
        // setUsername(localStorage.getItem('username'));
    }, [localStorage.getItem('id_token')]);
    return (
        <>
            <AppBar position="sticky" className="header-container">
                <Toolbar>
                    <Typography className="branch-container">Myapp</Typography>
                    <Tabs
                        onChange={(e, value) => {
                            setTabIndex(value);
                        }}
                        value={tabIndex}
                        className="header-navbar"
                    >
                        <Tab
                            to={'/'}
                            LinkComponent={NavLink}
                            style={{
                                textTransform: 'none',
                                fontSize: '.95rem',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                            label={'Trang chủ'}
                        ></Tab>

                        <Tab
                            to={'/exams'}
                            LinkComponent={NavLink}
                            style={{ textTransform: 'none', fontSize: '.95rem', color: 'black', fontWeight: 'bold' }}
                            label={'Đề thi'}
                        ></Tab>
                        <Tab
                            style={{ textTransform: 'none', fontSize: '.95rem', color: 'black', fontWeight: 'bold' }}
                            label={'Thống kê'}
                        ></Tab>
                        <Tab
                            style={{ textTransform: 'none', fontSize: '.95rem', color: 'black', fontWeight: 'bold' }}
                            label={'Liên hệ'}
                        ></Tab>
                    </Tabs>
                    {authContext.auth?.authenticated ? (
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            style={{ color: 'black', marginLeft: '5px' }}
                            title={authContext.auth.idTokenParsed.name}
                        >
                            {authContext.auth?.tokenParsed.realm_access.roles.includes('admin') ? (
                                <NavDropdown.Item
                                    id="create_exams"
                                    onClick={() => {
                                        navigate('/admin/exams', {
                                            state: {
                                                isAdmin: true,
                                            },
                                        });
                                    }}
                                    // href={logoutUrl}
                                >
                                    Tạo đề thi
                                </NavDropdown.Item>
                            ) : (
                                <div></div>
                            )}

                            <NavDropdown.Item
                                id="logout"
                                onClick={() => {
                                    authContext.auth.logout({ redirectUri: baseUrl });
                                    // authContext.auth.logout();
                                }}
                                // href={logoutUrl}
                            >
                                Đăng xuất
                            </NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <Button
                            id="login"
                            className="signin-btn"
                            variant="contained"
                            onClick={() => {
                                // setLoginFlag(!loginFlag);
                                // login();
                                navigate('/exams');
                            }}
                        >
                            Đăng nhập
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Header;
