const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Demo Running 🚀");
});

module.exports = app;
