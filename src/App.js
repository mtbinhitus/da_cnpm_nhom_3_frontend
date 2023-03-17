import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

import DetailPage from "./pages/DetailPage";
import Homepage from "./pages/homepage";

import PracticePage from "./pages/practicePage";
import TestResult from "./pages/TestResult";
import Protected from "./components/Protected";
import Public from "./components/Public";
import { privateRoutes } from "./routes/PrivateRoutes";
import RequireAuth from "./routes/RequireAuth";
function App() {
    // const auth = useAuth();
    // return auth ? <Protected /> : <Public />;
    return (
        <>
            <BrowserRouter>
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
                                    <RequireAuth>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </RequireAuth>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
