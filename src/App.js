import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

import DetailPage from "./pages/DetailPage";
import Homepage from "./pages/homepage";

import PracticePage from "./pages/practicePage";
import TestResult from "./pages/TestResult";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <Homepage/>
                            </Layout>
                        }
                    />
                    <Route path="/practiceTest" element={<PracticePage />} />
                    <Route path="/TestResult" element={<TestResult />} />
                    <Route path="/DetailPage" element={<DetailPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
