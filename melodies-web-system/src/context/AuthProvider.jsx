import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getUserLogin,
  loginUser,
  logoutUser,
  registerUser,
} from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = getUserLogin();
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const login = async (username, password) => {
    const response = await loginUser(username, password);
    if (response.success) {
      setUser(response.data);
    }
    return response;
  };

  const register = async (username, email, password) => {
    return await registerUser(username, email, password);
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
