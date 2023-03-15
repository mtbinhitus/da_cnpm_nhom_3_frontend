import logo from "./logo.svg";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Protected from "./components/Protected";
import Public from "./components/Public";
import Layout from "./components/Layout";
import TestResult from "./pages/TestResult";
import Homepage from "./pages/homepage";
import TestList from "./pages/TestList";
import PracticePage from "./pages/practicePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

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
