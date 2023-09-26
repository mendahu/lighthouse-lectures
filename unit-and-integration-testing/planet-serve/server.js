const express = require("express");
const planets = require("./planets.json");
const app = express();

app.use(express.static("public"));

app.get("/api/planets", (req, res) => {
  return res.json(planets);
});

app.listen(8080, () => {
  console.log("Serving some sick planetary science on port 8080");
});
