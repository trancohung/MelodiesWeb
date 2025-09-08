import songModel from "../models/Song.js";

const songService = {
  createSong: async (data) => {
    const song = new songModel(data);
    return await song.save();
  },

  getSongs: async () => {
    return await songModel
      .find()
      .populate("artist", "username email")
      .populate("album", "title");
  },

  getSongById: async (id) => {
    return await songModel
      .findById(id)
      .populate("artist", "username email")
      .populate("album", "title");
  },

  deleteSong: async (id) => {
    return await songModel.findByIdAndDelete(id);
  },
};

export default songService;
