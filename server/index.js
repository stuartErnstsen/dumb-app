require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.port || process.env.SERVER_PORT;

app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () =>
  console.log(`Hippity hoppity, server is poppity on ${port}`)
);
