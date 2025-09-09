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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initUser = async () => {
      try {
        const userData = await getMe();
        setUser(userData);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    const token = localStorage.getItem("x-access-token");
    if (token) {
      initUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await loginUser({ email, password });
      if (res.success && res.user) {
        localStorage.setItem("x-access-token", res.user.token);
        const { token, ...userData } = res.user;
        setUser(userData);
        return { success: true, data: userData };
      } else {
        return { success: false, message: res.message || "Login failed" };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  const register = async (username, email, password) => {
    return await registerUser({ username, email, password });
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
