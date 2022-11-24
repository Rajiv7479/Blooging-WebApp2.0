const express = require("express");

const router = express.Router();
const {
  createUser,
  loginUser,
  getSpecificPost,
} = require("../controllers/user");

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/dashboard/:author", getSpecificPost);

module.exports = router;
