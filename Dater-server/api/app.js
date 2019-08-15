const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.disable("x-powered-by");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: "application/json" }));

const usersList = require("./routes/usersList");
app.use("/users", usersList);

module.exports = app;
