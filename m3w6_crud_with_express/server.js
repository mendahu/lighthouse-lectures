const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const PORT = 8080; // constant

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

const spaceships = {
  1: {
    name: "Space Shuttle",
    thrust: 8000000,
    wingspan: 8,
  },
  2: {
    name: "Naboo Royal Cruiser",
    thrust: 16000000,
    wingspan: 16,
  },
  3: {
    name: "Millenium Falcon",
    thrust: 32000000,
    wingspan: null,
  },
};

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// BREAD

// Browse
// GET spacesphips/

app.get("/spaceships", (req, res) => {
  res.render("spaceships_browse", { spaceships: spaceships, name: "Jake" });
});

// Add
// POST spaceships/new
// GET spaceships/new

app.get("/spaceships/new", (req, res) => {
  res.render("spaceships_add");
});

app.post("/spaceships/new", (req, res) => {
  const { name, thrust, wingspan } = req.body;
  spaceships[4] = {
    name: name,
    thrust: thrust,
    wingspan: wingspan,
  };
  res.redirect("/spaceships");
});

// Read
// GET spaceships/:id
// GET spaceships/1

app.get("/spaceships/:id", (req, res) => {
  const { id } = req.params;
  res.render("spaceships_read", { spaceship: spaceships[id], id: id });
});

// Edit
// POST spaceships/:id
// POST, PATCH, PUT
// <form>

app.post("/spaceships/:id", (req, res) => {
  const { id } = req.params;
  const thrust = req.body.thrust;
  spaceships[id].thrust = thrust;
  res.redirect(`/spaceships/${id}`);
});

// Delete
// POST spaceships/:id/delete

app.post("/spaceships/:id/delete", (req, res) => {
  const { id } = req.params;
  delete spaceships[id];
  res.redirect("/spaceships");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
