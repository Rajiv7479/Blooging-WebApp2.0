const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  shortDesc: String,
  desc: String,
  image: String,

  //   body: String,
  //   comments: [{ body: String, date: Date }],
  //   date: { type: Date, default: Date.now },
  //   hidden: Boolean,
  //   meta: {
  //     votes: Number,
  //     favs: Number,
  //   },
});

module.exports = mongoose.model("Blog", blogSchema);

// const connection = mongoose.createConnection("mongodb://localhost:27017/test");
// const Tank = connection.model("Tank", yourSchema);
