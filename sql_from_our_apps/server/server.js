const express = require("express");
const morgan = require("morgan");
const PORT = 8080;

const app = express();

app.use(morgan("dev"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Welcome to Astrostatus!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
