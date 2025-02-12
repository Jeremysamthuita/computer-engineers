const mongoose = require("mongoose");

const pictureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }, // URL of the image
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Picture", pictureSchema);
