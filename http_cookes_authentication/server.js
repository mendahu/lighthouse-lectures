const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const languages = require("./languages.json");

const app = express();
const port = 8000;

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const generateId = () => {
  return Math.random().toString(16).slice(2, 8);
};

const users = {
  "1d6e3c": {
    id: "1d6e3c",
    email: "me@jakerobins.com",
    password: "test",
  },
};

app.get("/", (req, res) => {
  const langPref = req.cookies.language;
  const templateVars = {
    heading: languages.homeHeadings[langPref], // languages.homeHeadings.en
    body: languages.homeBodies[langPref],
  };
  res.render("home", templateVars);
});

app.get("/about", (req, res) => {
  const userId = req.cookies.userId;

  if (!userId) {
    return res.redirect("/login");
  }

  const langPref = req.cookies.language;
  const templateVars = {
    heading: languages.aboutHeadings[langPref],
    body: languages.aboutBodies[langPref],
  };
  res.render("about", templateVars);
});

app.get("/language/:lang", (req, res) => {
  const userLangPreference = req.params.lang;
  res.cookie("language", userLangPreference);
  res.redirect("/");
});

// GET /signup
app.get("/signup", (req, res) => {
  res.render("register");
});

// GET /login
app.get("/login", (req, res) => {
  res.render("login");
});

// POST /register
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  const id = generateId();

  const user = {
    id,
    email,
    password,
  };

  users[id] = user;

  res.cookie("userId", id);
  res.redirect("/");
});

// POST /login
app.post("/login", (req, res) => {
  // const email = req.body.email
  // const password = req.body.password
  const { email, password } = req.body;

  let user;

  for (const userId in users) {
    if (users[userId].email === email) {
      user = users[userId];
    }
  }

  // check positive - less readable!!
  // if (user) {
  //   if (password) {
  //     res.cookie()
  //   }
  // }

  // check negative - More readable!!
  if (!user) {
    return res.status(400).send("User doesn't exist!");
  }

  if (user.password !== password) {
    return res.status(400).send("Password doesn't match!");
  }

  res.cookie("userId", user.id);
  res.redirect("/");
});

// POST /logout
app.post("/logout", (req, res) => {
  res.clearCookie("userId");
  res.redirect("/");
});

app.listen(port, () => {
  console.log("App is running on port: ", port);
});
