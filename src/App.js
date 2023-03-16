import logo from "./logo.svg";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Protected from "./components/Protected";
import Public from "./components/Public";
import Layout from "./components/Layout";
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
