import { useAppSelector } from "@/redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode })  => {
  const location = useLocation();
  const token = useAppSelector((state) => state.auth.token);

  if (token) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;