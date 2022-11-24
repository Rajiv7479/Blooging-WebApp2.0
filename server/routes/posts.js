const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const {
  getAllPost,
  createPost,
  deletePost,
  updatePost,
  getPost,
  createComment,
  getAllComments,
} = require("../controllers/posts");

router.route("/").get(getAllPost).post(createPost);
router.route("/:id").get(getPost).patch(updatePost).delete(deletePost);
router.route("/api/comments").get(getAllComments).post(createComment);

// router.get("/", getAllPost);
// router.post("/", auth, createPost);
// router.get("/:id", auth, getPost);
// router.delete("/:id", auth, deletePost);
// router.patch("/:id", auth, updatePost);

module.exports = router;
