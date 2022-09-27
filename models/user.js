const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String, required: true },
  password: { type: String, required: true },
  buyerOrSeller: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
