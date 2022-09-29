const mongoose = require("mongoose");

const sonySchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  platform: { type: String, required: true },
  photo: { type: String },
  gameCheckedOut: Boolean,
});

const Sony = mongoose.model("Sony", sonySchema);

module.exports = Sony;
