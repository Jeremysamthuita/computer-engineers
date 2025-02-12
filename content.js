const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  type: { type: String, enum: ["sermon", "event", "picture"], required: true },
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
  imageUrl: { type: String }, // For storing image URLs
  fileUrl: { type: String } // Audio/Video file URL
});

module.exports = mongoose.model("Content", ContentSchema);
