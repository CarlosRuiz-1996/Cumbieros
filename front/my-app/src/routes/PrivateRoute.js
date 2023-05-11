import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../pages/Auth/useAuth";

export default function PrivateRoute ({children, redirectTo= '/login'}){
    const auth = useAuth();
    // console.log(auth)
     if(auth.isLogged() ){
        return <Navigate to={redirectTo}/>
    }
    return children?children:<Outlet/>;

}
   