const API_URL = "https://mindx-mockup-server.vercel.app/api/resources";
const API_KEY = "67d9539146d8721a9e76872a";

const headers = {
  "Content-Type": "application/json",
};

export const registerUser = async (name, email, password) => {
  try {
    const responseUsers = await fetch(`${API_URL}/users?apiKey=${API_KEY}`, {
      headers,
    });
    if (!responseUsers.ok) {
      return { success: false, message: "Failed to fetch users" };
    }

    const dataUsers = await responseUsers.json();
    const users = dataUsers.data?.data || [];

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return { success: false, message: "Email already exists" };
    }

    const response = await fetch(`${API_URL}/users?apiKey=${API_KEY}`, {
      method: "POST",
      headers,
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      return { success: false, message: "Network problem" };
    }

    const data = await response.json();
    return { success: true, data: data.data };
  } catch (err) {
    return { success: false, message: err.message };
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/users?apiKey=${API_KEY}`, {
      headers,
    });

    if (!response.ok) {
      return { success: false, message: "Failed to fetch users" };
    }

    const data = await response.json();
    const users = data.data?.data || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return { success: false, message: "Incorrect email or password" };
    }

    localStorage.setItem("userLogin", JSON.stringify(user));
    return { success: true, data: user };
  } catch (error) {
    console.error("Login Error: ", error);
    return { success: false, message: error.message };
  }
};

export const getUserLogin = () => JSON.parse(localStorage.getItem("userLogin"));

export const logoutUser = () => localStorage.removeItem("userLogin");
