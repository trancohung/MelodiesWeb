import express from "express";
import songController from "../controllers/songController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import uploadSong from "../utils/fileUpload.js";

const router = express.Router();

router.get("/", songController.getSongs);
router.get("/:id", songController.getSongById);
router.post(
  "/",
  authMiddleware.protect,
  uploadSong.single("song"),
  songController.createSong
);
router.delete("/:id", authMiddleware.protect, songController.deleteSong);

export default router;
