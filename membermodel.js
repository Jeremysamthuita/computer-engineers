const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  phone: { type: String },
  email: { type: String },
  role: { type: String, enum: ["Member", "Leader", "Pastor"] },
  dateJoined: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Member", memberSchema);
