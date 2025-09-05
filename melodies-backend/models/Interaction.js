import mongoose from "mongoose";

const interactionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    song: { type: mongoose.Schema.Types.ObjectId, ref: "Song", required: true },
    type: { type: String, enum: ["like", "comment", "play"], required: true },
    comment: { type: String }, // only for comments (when type = "comment")
  },
  { timestamps: true }
);

const interactionModel = mongoose.model("Interaction", interactionSchema);
export default interactionModel;
