const express = require("express");
const app = express();
const port = 3002;
const morgan = require("morgan");

app.set("view engine", "ejs");

// middleware that will log all requests to the console.
// app.use((req, res, next) => {
//   console.log(
//     `New Request: ${new Date().toISOString()} ${req.method} ${req.url}`
//   );

//   next();
// });
const middleware = morgan("dev");
app.use(middleware);

app.get("/", (req, res) => {
  // res.status(200).sendFile(`${__dirname}/index.html`);

  const name = "Jake";

  const templateVars = {
    name: name,
    email: "me@jakerobins.com",
  };

  res.status(200).render("index", templateVars);
});

app.get("/users", (req, res) => {
  res.status(204).send();
});

app.get("*", (req, res) => {
  res.status(404).send("This page doesn't exist");
});

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});
