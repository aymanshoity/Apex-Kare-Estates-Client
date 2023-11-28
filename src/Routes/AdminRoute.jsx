import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import UseAdmin from "../Hooks/UseAdmin";


const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading]=UseAdmin()
    const {user,loading}=useContext(AuthContext)
    const location =useLocation()
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;