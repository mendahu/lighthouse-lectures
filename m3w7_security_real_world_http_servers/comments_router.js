const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // stuff happens here
  res.redirect("../posts");
});

router.get("/:id", (req, res) => {
  // stuff happens here
  res.send("READ comment");
});

router.post("/:id", (req, res) => {
  // stuff happens here
  res.send("UPDATE comment");
});

router.post("/new", (req, res) => {
  // stuff happens here
  res.send("ADD comment");
});

router.post("/:id", (req, res) => {
  // stuff happens here
  res.send("DELETE comment");
});

module.exports = router;
