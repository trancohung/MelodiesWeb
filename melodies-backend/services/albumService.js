import albumModel from "../models/Album";

const albumService = {
  createAlbum: async ({ title, coverUrl, releaseDate, artistId }) => {
    const album = new albumModel({
      title,
      coverUrl,
      releaseDate,
      artistId,
    });
    await album.save();
    return album;
  },

  getAlbums: async () => {
    const albums = await albumModel.find().populate("artistId", "name");
    return albums;
  },

  getAlbumsById: async (albumId) => {
    const album = await albumModel.findById(albumId).populate("songs");
    return album;
  },
};
export default albumService;
