const express = require("express");
// const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const PORT = 3000;
const app = express();

const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////////////////////////////////////////////////////

app.use(express.static("public")); // Choose a directory to serve files from... (images, CSS, JS, videos.)
// app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["dinosaur", "purple-dinosaur", "red-dinosaur"],
    maxAge: MS_IN_A_DAY,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Listener
/////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log("Express server running on port:", PORT);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Database
/////////////////////////////////////////////////////////////////////////////////////////////////////

const users = [
  { id: 1, name: "Harinder", pass: "Password123" },
  { id: 2, name: "Hope", pass: "b3tt3rp4ss" },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Cookie read and write test.
app.get("/test", (req, res) => {
  // Reading a cookie from the req.cookies object.
  console.log("Cookie Received on Back-end:", req.session["test cookie"]);
  // Writing a cookie (key, value).

  req.session["test cookie"] = "This is a test!";
  //   res.cookie("test cookie", "This is a test!");
  // Send HTML to browser.
  res.end("<html><head><title>test</title></head><body>test</body></html>");
});

app.get("/", (req, res) => {
  const userID = req.session.userID;

  let currentUser = false;

  for (const user of users) {
    if (userID == user.id) {
      currentUser = user;
    }
  }

  const templateVars = {
    pageName: "Sign In",
    user: currentUser,
  };
  res.render("index", templateVars);
});

app.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.pass;

  let currentUser = false;

  for (const user of users) {
    const passwordMatches = bcrypt.compareSync(password, user.pass);
    if (user.name == username && passwordMatches) {
      currentUser = user;
    }
  }

  if (currentUser) {
    // res.cookie("userID", currentUser.id);
    req.session.userID = currentUser.id;
  }

  console.log("User:", username, "Password:", password);
  res.redirect("/");
});

// Display the form.
app.get("/register", (req, res) => {
  const templateVars = {
    pageName: "Register",
    user: false,
  };
  res.render("register", templateVars);
});

// Handle form submission.
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.pass;

  console.log("Username:", username, "Password:", password);

  const newID = users.length + 1; // Next ID (just add one.)

  // Real world... check if username already exists...
  // Real world... generate more unique ID, careful!! etc.

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  // Creating and adding the new user.
  users.push({
    id: newID,
    name: username,
    pass: hash,
  });

  console.log(users);

  // Sign the user in.
  //   res.cookie("userID", newID);
  req.session.userID = newID;

  // Send'em home!
  res.redirect("/");
});

app.post("/sign-out", (req, res) => {
  //   res.clearCookie("userID"); // Destroy the cookie (by key)!
  req.session = null;
  res.redirect("/");
});
