const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const templateVars = {
    title: "My awesome site",
    heading: "Welcome!",
    username: "Jim",
  };

  res.render("index", templateVars);
});

app.listen(port, () => {
  console.log("Listening on port ", port);
});
