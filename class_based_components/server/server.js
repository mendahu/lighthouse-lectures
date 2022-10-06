const express = require("express");
const app = express();
const frogs = require("./frogs.json");

const PORT = 8080;

app.get("/frogs", (req, res) => {
  res.json(frogs);
});

app.get("/frogs/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * frogs.length);
  res.json(frogs[randomNumber]);
});

app.listen(PORT, () =>
  console.log(
    `🐸🐸🐸🐸🐸🐸 Prepare yourself for some frogs on Port ${PORT} 🐸🐸🐸🐸🐸🐸`
  )
);
