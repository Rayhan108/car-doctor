import {  useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(authContext)
    const location =useLocation();
    if(loading){
        return <progress className="progress progress-secondary w-56" value="10" max="100"></progress>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivetRoute;