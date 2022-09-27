const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  platform: { type: String, required: true },
  gameCheckedOut: Boolean,
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
