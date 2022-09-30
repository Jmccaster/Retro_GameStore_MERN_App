const mongoose = require("mongoose");

const playstationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  platform: { type: String, required: true },
  photo: { type: String },
  gameCheckedOut: Boolean,
});

const PlayStation = mongoose.model("PlayStation", playstationSchema);

module.exports = PlayStation;
