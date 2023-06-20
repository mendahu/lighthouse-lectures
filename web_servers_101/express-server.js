const express = require("express");
const app = express();
const port = 3002;

app.set("view engine", "ejs");

// const morgan = require("morgan");

// app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log(`New Request: ${req.method} ${req.url}`);

  // do whatever you want here
  //  check authentication?
  // other sutff????

  next();
});

// chain middleware

app.get("/", (req, res) => {
  // res.send("thanks for visiting /");
  // res.sendFile(__dirname + "/index.html");
  const tempalteVars = {
    message: "This message is rendered dynamically.",
    number: Math.random() * 100,
  };

  res.render("index", tempalteVars);
});

app.get("/users", (req, res) => {
  // res.send("thanks for visiting /users!");
  res.render("index");
});

app.get("/users/:id", (req, res) => {
  // console.log(req.params.id);
  res.send("thanks for visiting /users!");
});

app.listen(port, () => {
  console.log("App listening on port:", port);
});
