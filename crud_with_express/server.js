const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 8080;

app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const database = {
  1: {
    name: "Whole Wheat",
    price: 100,
    taste: "amazing",
  },
  2: {
    name: "Sourdough",
    price: 250,
    taste: "a wee bit sour",
  },
  3: {
    name: "Pumpernickel",
    price: 500,
    taste: "spooky",
  },
};

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Browse breads
// GET /breads

app.get("/breads", (req, res) => {
  // res.send("You got breads");
  const templateVariables = { breads: database };

  res.render("browse_breads", templateVariables);
});

// RETURN AT 11:10 PDT

// Read breads
// GET /breads/:id
// GET /breads/1
// GET /breads/2

app.get("/breads/:id", (req, res) => {
  const id = req.params.id;

  if (!database[id]) {
    return res.send("doesn't exist");
  }

  const templateVariables = {
    id: id,
    bread: database[id],
  };

  res.render("read_breads", templateVariables);
});

// Add breads
// POST /breads/new

app.post("/breads/new", (req, res) => {
  // get the form data from body
  const { name, price, taste } = req.body;

  const newId = 4;

  // add to the database
  database[newId] = {
    name,
    price,
    taste,
  };

  // redirect to somewhere for the user
  res.redirect(`/breads/${newId}`);
});

// Edit breads
// POST /breads/:id

app.post("/breads/:id", (req, res) => {
  // get the id from the route parameter
  const id = req.params.id;

  // get the form body information
  const body = req.body;
  const price = body.price;

  if (typeof price !== "number") {
    return res.send("Hey, what are you doing this is a price????");
  }

  // edit the database with the new info
  database[id].price = price;

  // send the user somewhere
  res.redirect(`/breads/${id}`);
});

// Delete breads
// POST /breads/delete/:id
// POST /breads/:id/delete (same as Tinyapp)

app.post("/breads/:id/delete", (req, res) => {
  const id = req.params.id;

  delete database[id];

  res.redirect("/breads");
});

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
