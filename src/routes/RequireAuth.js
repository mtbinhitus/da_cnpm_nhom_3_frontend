import useAuth from "../hooks/useAuth";

const RequireAuth = ({ children }) => {
    const [auth] = useAuth();
    return auth ? children : <div></div>;
};
export default RequireAuth;
