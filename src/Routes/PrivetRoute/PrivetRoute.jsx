import {  useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(authContext)
    if(loading){
        return <progress className="progress progress-secondary w-56" value="10" max="100"></progress>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivetRoute;