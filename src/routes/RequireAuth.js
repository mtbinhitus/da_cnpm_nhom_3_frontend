import useAuth from "../hooks/useAuth";

const RequireAuth = ({ children }) => {
    const [auth, token] = useAuth();
    localStorage.setItem("token", token);
    return auth ? children : <div></div>;
};
export default RequireAuth;
