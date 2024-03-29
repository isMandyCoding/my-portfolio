const express = require("express");
const path = require("path");
const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.SERVER_PORT ?? 8080;

app.listen(port);
console.log(`App listening at port: ${port}`);
