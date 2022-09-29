const mongoose = require("mongoose");

const nintendoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  platform: { type: String, required: true },
  photo: { type: String },
  gameCheckedOut: Boolean,
});

const Nintendo = mongoose.model("Nintendo", nintendoSchema);

module.exports = Nintendo;
