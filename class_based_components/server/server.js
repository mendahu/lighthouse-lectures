const express = require("express");
const app = express();
const frogs = require("./frogs.json");

app.get("/frogs", (req, res) => {
  res.json(frogs);
});

app.get("/frogs/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  res.json(frogs[randomNumber]);
});

app.listen(8080, () =>
  console.log("Prepare yourself for some frogs on Port 8080")
);
