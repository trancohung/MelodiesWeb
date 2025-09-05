import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
    genre: { type: String },
    fileUrl: { type: String, required: true }, // url to the song file
    coverUrl: { type: String }, // image cover for the song
    plays: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const songModel = mongoose.model("Song", songSchema);
export default songModel;
