const users = require("./data/users.json");
const pets = require("./data/pets.json");
const express = require("express");
const app = express();

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

app.get("/api/users/:id", (req, res) => {
  const stringId = req.params.id;
  const id = parseInt(stringId);
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      error_code: 0,
      message: "id is not a number",
    });
  }
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({
      success: false,
      error_code: 1,
      message: "user not found",
    });
  }

  return res.json({
    success: true,
    data: user,
  });
});

app.get("/api/users/:id/pets", (req, res) => {
  const stringId = req.params.id;
  const id = parseInt(stringId);
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      error_code: 0,
      message: "id is not a number",
    });
  }

  const userPets = pets.filter((p) => p.user_id === id);
  return res.json({
    success: true,
    data: userPets,
  });
});

app.get("/api/pets", (req, res) => {
  return res.json({
    success: true,
    data: pets,
  });
});

app.get("/api/pets/:id", (req, res) => {
  const stringId = req.params.id;
  const id = parseInt(stringId);
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      error_code: 0,
      message: "id is not a number",
    });
  }
  const pet = pets.find((p) => p.id === id);
  if (!pet) {
    return res.status(404).json({
      success: false,
      error_code: 2,
      message: "pet not found",
    });
  }

  return res.json({
    success: true,
    data: pet,
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error_code: 3,
      message: "email or password is missing",
    });
  }
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({
      success: false,
      error_code: 1,
      message: "user not found",
    });
  }
  return res.cookie("user_id", user.id).json({
    success: true,
    data: user,
  });
});

app.post("/api/logout", (req, res) => {
  return res.clearCookie("user_id").json({
    success: true,
    message: "logged out successfully",
  });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
