const express = require("express");
const morgan = require("morgan");
const PORT = 8080;

const {
  getAllAstronauts,
  updateAstronautDestination,
  getAllAgencies,
  addAstronaut,
} = require("./db/queries");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const templateVars = {
    astronauts: [],
    agencies: [],
  };

  // Promise.all()

  getAllAstronauts()
    .then((astronauts) => {
      templateVars.astronauts = astronauts;

      return getAllAgencies();
    })
    .then((agencies) => {
      templateVars.agencies = agencies;
      res.render("index", templateVars);
    })
    .catch((err) => {
      console.error(err);
      const templateVars = {
        astronauts: [],
      };

      res.render("index", templateVars);
    });
});

app.post("/astronauts/:id", (req, res) => {
  const { id } = req.params;
  const { destination } = req.body;

  // Update the astronaut's destination
  updateAstronautDestination(id, destination).then(() => {
    res.redirect("/");
  });
});

app.post("/astronauts", (req, res) => {
  const { name, agency_id, destination } = req.body;
  addAstronaut(name, agency_id, destination).then((astronaut) => {
    res.json(astronaut);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
