import logo from "./logo.svg";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Protected from "./components/Protected";
import Public from "./components/Public";

function App() {
    const auth = useAuth();
    return auth ? <Protected /> : <Public />;
}

export default App;
