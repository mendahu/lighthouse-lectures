const express = require("express");
const app = express();
const port = 3000;
// const morgan = require("morgan");

// app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log(`New Request: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/users", (req, res) => {
  res.send("Thanks for visiting /users!");
});

app.get("*", (req, res) => {
  res.status(404);
  res.send("Not found");
});

app.listen(port, () => {
  console.log("Express app listening on port: ", port);
});
