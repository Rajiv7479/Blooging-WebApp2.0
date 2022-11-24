const User = require("../modal/userSchema");
const Blog = require("../modal/blogSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { username, password, email, fullname } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      const hashedPass = await bcrypt.hash(password, 12);

      const newUser = new User({
        username,
        email,
        fullname,
        password: hashedPass,
      });
      const UserCreated = await newUser.save();
      res.status(200).json(UserCreated);
    } else {
      console.log("user allready exist");
      res.status(400).json("user allready exist");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "invalid credentials" });

    const token = jwt.sign({ email: user.email, id: user._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const getSpecificPost = async (req, res) => {
  const { author } = req.params;
  try {
    const specificPost = await Blog.find({ author: author });
    // console.log(specificPost);
    res.status(200).json({ specificPost });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createUser, loginUser, getSpecificPost };
