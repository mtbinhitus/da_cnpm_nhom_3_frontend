import logo from "./logo.svg";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Protected from "./components/Protected";
import Public from "./components/Public";
import Layout from "./components/Layout";
import TestResult from "./pages/TestResult";
import Homepage from "./pages/Homepage";
import TestList from "./pages/TestList";

function App() {
    const auth = useAuth();
    return (
        <Layout>
            <TestList />
        </Layout>
    );
}
export default App;
