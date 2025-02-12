const mongoose = require("mongoose");

const sermonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  preacher: { type: String, required: true },
  date: { type: Date, required: true },
  videoUrl: { type: String }, // YouTube or local video URL
  notes: { type: String }, // Sermon summary or transcript
}, { timestamps: true });

module.exports = mongoose.model("Sermon", sermonSchema);
