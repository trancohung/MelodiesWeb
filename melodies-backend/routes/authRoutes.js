import express from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", authController.registerUser);
router.post("/login", authMiddleware.protect, authController.loginUser);
router.get("/me", authMiddleware.protect, authController.getCurrentUser);

export default router;
