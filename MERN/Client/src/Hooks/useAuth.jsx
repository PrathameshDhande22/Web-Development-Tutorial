import { useContext } from "react";
import { AuthContext } from "../Auth";

const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of AuthProvider");
  }
  return authContextValue;
};

export default useAuth;
