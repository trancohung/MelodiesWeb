import songService from "../services/songService.js";

const songController = {
  createSong: async (req, res) => {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({ message: "No file uploaded", success: false });
      }
      const { title, genre, album, coverUrl } = req.body;
      const artist = req.user._id;
      const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;
      const songData = { title, genre, album, coverUrl, artist, fileUrl };
      const song = await songService.createSong(songData);
      res
        .status(201)
        .json({ message: "Song created successfully", song, success: true });
    } catch (error) {
      console.error("Error in createSong: ", error);
      res
        .status(500)
        .json({ message: "Internal server error", success: false });
    }
  },

  getSongs: async (req, res) => {
    try {
      const songs = await songService.getSongs();
      res
        .status(200)
        .json({ message: "Songs fetched successfully", songs, success: true });
    } catch (error) {
      console.error("Error in getSongs: ", error);
      res
        .status(500)
        .json({ message: "Internal server error", success: false });
    }
  },

  getSongById: async (req, res) => {
    try {
      const song = await songService.getSongById(req.params.id);
      if (!song) {
        return res
          .status(404)
          .json({ message: "Song not found", success: false });
      }
      res
        .status(200)
        .json({ message: "Song fetched successfully", song, success: true });
    } catch (error) {
      console.error("Error in getSongById: ", error);
      res
        .status(500)
        .json({ message: "Internal server error", success: false });
    }
  },

  deleteSong: async (req, res) => {
    try {
      const song = await songService.getSongById(req.params.id);
      if (!song) {
        return res
          .status(404)
          .json({ message: "Song not found", success: false });
      }
      if (
        song.artist.toString() !== req.user._id.toString() &&
        req.user.role !== "admin"
      ) {
        return res
          .status(403)
          .json({ message: "Unauthorized", success: false });
      }
      await songService.deleteSong(req.params.id);
      res
        .status(200)
        .json({ message: "Song deleted successfully", success: true });
    } catch (error) {
      console.error("Error in deleteSong: ", error);
      res
        .status(500)
        .json({ message: "Internal server error", success: false });
    }
  },
};

export default songController;
