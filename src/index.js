require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const usersRoute = require("./routes/users.js");
const postsRoute = require("./routes/posts.js");
const middlewareLogRequest = require("./middleware/log.js");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(PORT, () => {
  console.log(`running server ${PORT} successfuly`);
});
