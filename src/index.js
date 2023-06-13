require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/users.js");
const postsRoute = require("./routes/posts.js");
const middlewareLogRequest = require("./middleware/log.js");

const app = express();
app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json());
app.use("/assets", express.static("public/images"));

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(PORT, () => {
  console.log(`running server ${PORT} successfuly`);
});
