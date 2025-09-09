import albumService from "../services/albumService";

const albumController = {
  createAlbum: async (req, res) => {
    try {
      const { title, coverUrl, releaseDate } = req.body;
      const album = await albumService.createAlbum({
        title,
        coverUrl,
        releaseDate,
        artistId: req.user._id,
      });
      res
        .status(201)
        .json({ message: "Album create successfully", success: true });
    } catch (error) {
      console.error("Error creating album: ", error);
      res
        .status(500)
        .json({ message: "Internal server error", success: false });
    }
  },
};
