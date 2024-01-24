import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../Api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userdata, setUserData] = useState("");
  const [loading, setLoading] = useState(true);

  const storeTokeninLS = (token) => {
    setToken(token);
    return localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setUserData("");
    setToken("");
    return localStorage.removeItem("token");
  };

  const isLoggedIn = !!token;

  const Authorization = `Bearer ${token}`;

  useEffect(() => {
    const userAuthenticate = async () => {
      setLoading(true);
      try {
        const udata = await api.get("/auth/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (udata.status === 200) {
          setUserData(udata.data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log("Error occured in user authentication");
        console.log(error);
        logoutUser();
      }
    };
    userAuthenticate();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        storeTokeninLS,
        logoutUser,
        isLoggedIn,
        userdata,
        Authorization,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
