import api from "./api.js";

export const registerUser = async (data) => {
  try {
    const res = await api.post("/auth/register", data);
    return res.data;
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Error registering user",
    };
  }
};

export const loginUser = async (data) => {
  try {
    const res = await api.post("/auth/login", data);
    console.log("Login response:", res.data);
    if (res.data.success && res.data.user?.token) {
      localStorage.setItem("x-access-token", res.data.user.token);
      const { token, ...userData } = res.data.user;
      localStorage.setItem("user", JSON.stringify(userData));
    }
    return res.data;
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Error logging in",
    };
  }
};

export const getMe = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("x-access-token");
  localStorage.removeItem("user");
};
