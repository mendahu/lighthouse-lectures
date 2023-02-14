const express = require("express");
const morgan = require("morgan");
const {
  getAllAstronauts,
  updateAstronautDestination,
  addAstronaut,
} = require("./db/queries/astronauts");
const { getAllAgencies, getAgencyById } = require("./db/queries/agencies");

const PORT = 8080;
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // const templateVars = {};

  Promise.all([getAllAstronauts(), getAllAgencies()])
    .then((responses) => {
      res.render("index", {
        astronauts: responses[0].rows,
        agencies: responses[1].rows,
      });
    })
    .catch((err) => {
      console.error(err);
      res.render("index", { astronauts: [], agencies: [] });
    });

  // getAllAstronauts()
  //   .then((response) => {
  //     templateVars.astronauts = response.rows;
  //     return getAllAgencies();
  //   })
  //   .then((response) => {
  //     templateVars.agencies = response.rows;
  //     res.render("index", templateVars);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.render("index", { astronauts: [], agencies: [] });
  //   });
});

app.post("/astronauts/:id", (req, res) => {
  const { id } = req.params;
  const { destination } = req.body;
  updateAstronautDestination(id, destination)
    .then((response) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error(err);
      res.redirect("/");
    });
});

app.post("/api/astronauts/new", (req, res) => {
  const { name, agency_id, destination } = req.body;
  // console.log(name, agency_id, destination);

  const newAstronautResponse = {};

  addAstronaut(name, agency_id, destination)
    .then((response) => {
      const { name, agency_id, destination, id } = response.rows[0];

      newAstronautResponse.name = name;
      newAstronautResponse.destination = destination;
      newAstronautResponse.id = id;

      return getAgencyById(agency_id);
    })
    .then((response) => {
      newAstronautResponse.agency = response.rows[0].name;
      res.json(newAstronautResponse);
    })
    .catch((err) => console.error(err));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
