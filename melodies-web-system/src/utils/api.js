import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8082/api/v1",
});

const saveUserToLocalStorage = (user) => {
  localStorage.setItem("x-access-token", user.accessToken);
};

export const registerUser = async (username, email, password) => {
  try {
    const res = await API.post("/auth/register", { username, email, password });
    return { success: true };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Lỗi đăng ký",
    };
  }
};

export const loginUser = async (username, password) => {
  try {
    const res = await API.post("/auth/login", { username, password });
    const { user } = res.data;

    saveUserToLocalStorage(user);

    return { success: true };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Lỗi đăng nhập",
    };
  }
};

export const getUserLogin = () => localStorage.getItem("x-access-token");

export const logoutUser = () => localStorage.removeItem("x-access-token");
