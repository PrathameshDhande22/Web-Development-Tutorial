import useAuth from "../Hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedAccess = () => {
  const { isLoggedIn, userdata } = useAuth();

  if (isLoggedIn && userdata) {
    return <Navigate to={"/"} />;
  } else {
    return <Outlet />;
  }
};
