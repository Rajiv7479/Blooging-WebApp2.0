const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  commentId: String,
  comment: String,
  author: String,
});

module.exports = mongoose.model("Comment", commentSchema);
