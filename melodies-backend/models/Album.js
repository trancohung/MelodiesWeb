import mongoose from "mongoose";

const albumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    coverUrl: { type: String },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
    releaseDate: { type: Date },
  },
  { timestamps: true }
);

const albumModel = mongoose.model("Album", albumSchema);
export default albumModel;
