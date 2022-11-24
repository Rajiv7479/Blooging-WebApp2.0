const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const mongoose = require("mongoose");
const postMessage = require("./routes/posts");
const user = require("./routes/user");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/posts", postMessage);
app.use("/user", user);

//DATABASE CONNECTION

const dbUrl =
  process.env.DB_URL ||
  "mongodb+srv://blogapp:wMHkEiMsrgNxRo6C@cluster0.laznv.mongodb.net/blogPost?retryWrites=true&w=majority";
// "mongodb+srv://blogapp:wMHkEiMsrgNxRo6C@cluster0.laznv.mongodb.net/blogPost?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const conn = mongoose.connection;

conn.on("open", () => {
  console.log("Database connected");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
