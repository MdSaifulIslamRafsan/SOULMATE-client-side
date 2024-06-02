import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Vortex } from 'react-loader-spinner'

const PrivateRoute = ({children}) => {
   const {user , loading} = useAuth();
   const location = useLocation();
   if(loading){
    return <div className="flex min-h-screen items-center justify-center"> 
    <Vortex
    visible={true}
    height="80"
    width="80"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
      </div>
   }
   if(user){
    return children;
   }
   return <Navigate state={{from : location}} to={"/login"}></Navigate>
};

export default PrivateRoute;