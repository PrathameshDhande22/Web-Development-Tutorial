import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const Logout = () => {
  const { logoutUser } = useAuth();
  const confirmation = confirm("Are you sure you want to logout?");

  useEffect(() => {
    return () => {
      if (confirmation) {
        logoutUser();
        toast.success("Logout was successful");
      }
    };
  }, [logoutUser, confirmation]);

  return (
    <>{confirmation ? <Navigate to={"/login"} /> : <Navigate to={"/"} />};</>
  );
};
