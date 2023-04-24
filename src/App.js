import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import privateRoutes from './routes/PrivateRoutes';
import RequireAuth from './routes/RequireAuth';

function App() {
    // const auth = useAuth();
    // return auth ? <Protected /> : <Public />;
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Homepage />
                        </Layout>
                    }
                />
                {privateRoutes.map((route, index) => {
                    const Page = route.element;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <RequireAuth>
                                        <Page />
                                    </RequireAuth>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}
export default App;
