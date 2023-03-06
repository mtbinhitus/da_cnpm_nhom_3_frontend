import logo from "./logo.svg";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Protected from "./components/Protected";
import Public from "./components/Public";
import Layout from "./components/Layout";
import TestResult from "./pages/TestResult";

function App() {
    const auth = useAuth();
    return (
        <Layout>
            <TestResult />
        </Layout>
    );
}
export default App;
