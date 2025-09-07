import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getMe,
  loginUser,
  logoutUser,
  registerUser,
} from "../services/auth.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initUser = async () => {
      try {
        const userData = await getMe();
        setUser(userData);
      } catch (error) {
        setUser(null);
      }
    };
    const token = localStorage.getItem("x-access-token");
    if (token) initUser();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await loginUser({ email, password });
      console.log("Login result:", res);
      if (res.success && res.user?.token) {
        const { token, ...userData } = res.user;
        setUser(userData);
        return { success: true, data: userData };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
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
