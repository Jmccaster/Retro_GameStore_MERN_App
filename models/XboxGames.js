const mongoose = require("mongoose");

const xboxSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  platform: { type: String, required: true },
  photo: { type: String },
  gameCheckedOut: Boolean,
});

const Xbox = mongoose.model("Xbox", xboxSchema);

module.exports = Xbox;
