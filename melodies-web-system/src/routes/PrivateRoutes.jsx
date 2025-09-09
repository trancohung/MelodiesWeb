import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoutes = ({ role }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && !role.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
