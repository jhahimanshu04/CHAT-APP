/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("ChatApp");
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  useEffect(() => {
    console.log("Auth User Changed:", authUser);
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
