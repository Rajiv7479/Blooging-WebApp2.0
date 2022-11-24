const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  fullname: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
