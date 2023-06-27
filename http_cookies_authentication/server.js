const express = require("express");
const morgan = require("morgan");
const languages = require("./languages.json");
const cookieParser = require("cookie-parser");

const app = express();
const port = 8080;

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const users = {
  abcd: {
    id: "abcd",
    email: "me@jakerobins.com",
    password: "1234",
  },
};

app.get("/language/:lang", (req, res) => {
  const userLanguage = req.params.lang;
  res.cookie("lang", userLanguage);
  res.redirect("/");
});

app.get("/", (req, res) => {
  let userLanguage = req.cookies.lang || "en";

  const templateVars = {
    heading: languages.homeHeadings[userLanguage],
    body: languages.homeBodies[userLanguage],
  };
  res.render("home", templateVars);
});

app.get("/about", (req, res) => {
  let userLanguage = req.cookies.lang || "en";

  const templateVars = {
    heading: languages.aboutHeadings[userLanguage],
    body: languages.aboutBodies[userLanguage],
  };
  res.render("about", templateVars);
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check for duplicate accounts

  // check for empty forms

  // optional - password requirements?

  const id = 1; //  generate random id

  users[id] = {
    id,
    email,
    password,
  };

  res.cookie("userId", id);

  res.redirect("/");
});

app.get("/protected", (req, res) => {
  const userId = req.cookies.userId;

  // are they real?

  if (!users[userId]) {
    res.redirect("/login");
    // res.status(401).send("please login");
    return;
  }

  res.render("protected");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let user;

  for (const userId in users) {
    if (users[userId].email === email) {
      user = users[userId];
    }
  }
  if (!user) {
    // what if there is no users??
    res.status(404).send("This user doesn't exist!");
    return;
  }

  if (user.password !== password) {
    // verify password
    res.status(401).send("Incorrect Password");
    return;
  }

  res.cookie("userId", user.id);

  res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("userId");
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server is listening on port: ", port);
});
