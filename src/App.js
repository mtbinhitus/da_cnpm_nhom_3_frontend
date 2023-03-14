import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import useAuth from "./hooks/useAuth";
import PracticePage from "./pages/practicePage";
import TestResult from "./pages/TestResult";

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
