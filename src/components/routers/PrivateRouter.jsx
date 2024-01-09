import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return <h2>Loading data</h2>
    }
    else if (user) {
        return children;
    }
    return <Navigate to="/login" state={{form:location}} replace></Navigate>
};

export default PrivateRouter;