const express = require("express");
const morgan = require("morgan");
const PORT = 8080;

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
