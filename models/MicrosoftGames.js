const mongoose = require("mongoose");

const microsoftSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  platform: { type: String, required: true },
  photo: { type: String },
  gameCheckedOut: Boolean,
});

const Microsoft = mongoose.model("Microsoft", microsoftSchema);

module.exports = Microsoft;
