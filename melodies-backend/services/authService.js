import userModel from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (userId, role) => {
  return jwt.sign({ _id: userId, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const authService = {
  registerUser: async ({ username, email, password, role }) => {
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      throw new Error("Email already in use");
    }
    const newUser = await userModel.create({ username, email, password, role });

    return {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      token: generateToken(newUser._id, newUser.role),
    };
  },

  loginUser: async ({ email, password }) => {
    const user = await userModel.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error("Invalid credentials");
    }

    return {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    };
  },

  getCurrentUser: async (userId) => {
    const user = await userModel.findById(userId).select("-password");
    console.log(user);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  },
};

export default authService;
