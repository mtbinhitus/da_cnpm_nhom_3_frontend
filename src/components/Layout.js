import React from 'react';
import { Container } from '@mui/system';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container style={{ height: '100%', marginTop: '20px' }} className={'content-wapper'} maxWidth="xl">
                {children}
            </Container>
        </>
    );
};
export default Layout;
