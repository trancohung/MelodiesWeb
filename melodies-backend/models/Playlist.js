import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
    isPublic: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const playlistModel = mongoose.model("Playlist", playlistSchema);
export default playlistModel;
