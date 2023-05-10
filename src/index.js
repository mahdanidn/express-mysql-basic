const express = require("express");

const usersRoute = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/log.js");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", usersRoute);

app.listen(4000, () => {
  console.log("running server 4000 successfuly");
});
