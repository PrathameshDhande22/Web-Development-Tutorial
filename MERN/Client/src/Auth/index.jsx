import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const storeTokeninLS = (token) => {
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider value={{storeTokeninLS}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
