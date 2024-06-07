import { Vortex } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin , isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={{ from: location }} to={"/login"}></Navigate>;
};

export default AdminRoute;
