import useAuth from "../hooks/useAuth";

const RequireAuth = ({ children }) => {
    const [auth, token, client] = useAuth();
    console.log(client);
    localStorage.setItem("token", token);
    return auth ? children : <div></div>;
};
export default RequireAuth;
