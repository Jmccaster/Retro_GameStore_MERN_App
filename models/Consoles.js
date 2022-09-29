const mongoose = require("mongoose");

const consoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  availability: Boolean,
});

const Console = mongoose.model("Console", consoleSchema);

module.exports = Console;
