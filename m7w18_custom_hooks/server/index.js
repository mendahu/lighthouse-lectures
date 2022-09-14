const express = require("express");
const app = express();

app.get("/normal", (req, res) => {
  return res.status(200).json("The mitochondria is the powerhouse of the cell");
});

app.get("/delay", (req, res) => {
  setTimeout(() => {
    res.status(200).json("Sorry about the wait!");
  }, 4000);
});

app.get("/delay-error", (req, res) => {
  setTimeout(() => {
    res
      .status(500)
      .json("Sorry about the wait, but something else went wrong, too!");
  }, 4000);
});

app.get("/error", (req, res) => {
  return res.status(500).json("Sorry, there's been a problem.");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
