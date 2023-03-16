import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

import Homepage from "./pages/homepage";
import TestList from "./pages/TestList";
import DetailPage from "./pages/DetailPage";

import useAuth from "./hooks/useAuth";
import PracticePage from "./pages/practicePage";
import TestResult from "./pages/TestResult";
import PracticePage from "./pages/practicePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    const auth = useAuth();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <TestResult />
                            </Layout>
                        }
                    />
                    <Route path="/practiceTest" element={<PracticePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
