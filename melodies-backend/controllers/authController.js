import authService from "../services/authService.js";

const authController = {
  // @desc Register a new user
  // @route POST /api/auth/register
  // @access Public
  registerUser: async (req, res) => {
    try {
      const user = await authService.registerUser(req.body);
      res.status(201).json({
        message: "User registered successfully",
        user: user,
        success: true,
      });
    } catch (error) {
      console.error("Error in registerUser: ", error);
      if (error.message === "Email already in use") {
        return res.status(400).json({ message: error.message, success: false });
      }
      res
        .status(500)
        .json({ message: "Internal server error", success: false });
    }
  },

  // @desc Login user
  // @route POST /api/auth/login
  // @access Public
  loginUser: async (req, res) => {
    try {
      const user = await authService.loginUser(req.body);
      res.status(200).json({
        message: "Login successful",
        user: user,
        success: true,
      });
    } catch (error) {
      console.error("Error in loginUser: ", error);
      if (error.message === "Invalid email or password") {
        return res.status(401).json({ message: error.message, success: false });
      }
      res
        .status(500)
        .json({ message: "Internal server error", success: false });
    }
  },

  // @desc Get current user
  // @route GET /api/auth/me
  // @access Private
  getCurrentUser: async (req, res) => {
    console.log("req.user: ", req.user);
    try {
      const user = await authService.getCurrentUser(req.user._id);
      res.status(200).json({
        message: "User fetched successfully",
        user: user,
        success: true,
      });
    } catch (error) {
      console.error("Error in getCurrentUser: ", error);
      if (error.message === "User not found") {
        return res.status(404).json({ message: error.message, success: false });
      }
      res
        .status(500)
        .json({ message: "Internal server error", success: false });
    }
  },
};

export default authController;
