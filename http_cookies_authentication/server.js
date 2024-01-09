const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const languages = require("./languages.json");
const users = require("./database");
const { generateRandomId } = require("./helpers");

const app = express();
const port = 8080;

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// config
const FALLBACK_LANG = "en";

app.get("/", (req, res) => {
  const userLanguage = req.cookies.language || FALLBACK_LANG;
  const templateVars = {
    heading: languages.homeHeadings[userLanguage],
    body: languages.homeBodies[userLanguage],
  };
  res.render("home", templateVars);
});

app.get("/about", (req, res) => {
  const userLanguage = req.cookies.language || FALLBACK_LANG;
  const templateVars = {
    heading: languages.aboutHeadings[userLanguage],
    body: languages.aboutBodies[userLanguage],
  };
  res.render("about", templateVars);
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/register", (req, res) => {
  // get the email and password from the request
  const email = req.body.email;
  const password = req.body.password;

  // add it to our "db"
  const id = generateRandomId();

  const newUser = {
    id,
    email,
    password,
  };

  users[id] = newUser;

  // set the cookie
  res.cookie("user_id", id);

  // send the user somewhere at the end
  res.redirect("/");
});

app.post("/login", (req, res) => {
  // get the email and password from the request
  const email = req.body.email;
  const password = req.body.password;

  if (email === "" || password === "") {
    return res.status(400).send("Email and password cannot be empty");
  }

  // find the user in the database
  let foundUser = undefined;

  for (const userId in users) {
    if (users[userId].email === email) {
      foundUser = users[userId];
    }
  }

  // check if the user exists
  if (!foundUser) {
    return res.status(400).send("User doesn't exist!");
  }

  // verify the password matches
  if (foundUser.password !== password) {
    return res.status(400).send("Password doesn't match!");
  }

  // set the cookie
  res.cookie("user_id", foundUser.id);

  // redirect
  return res.redirect("/");
});

app.get("/languages/new", (req, res) => {
  res.render("new-language");
});

app.get("/languages/:languageId", (req, res) => {
  res.cookie("language", req.params.languageId);
  res.redirect("/");
});

app.get("/protected", (req, res) => {
  // check that they are logged in (handle if not)
  const userId = req.cookies.user_id;

  if (!userId) {
    return res.status(401).send("Please log in");
  }

  // get the user's name
  const user = users[userId];

  // pass to tempalte
  const templateVars = {
    name: user.email,
  };
  res.render("protected", templateVars);
});

app.post("/logout", (req, res) => {
  res.clearCookie("user_id");
  res.redirect("/");
});

app.listen(port, () => {
  console.log("App is listening on port", port);
});
