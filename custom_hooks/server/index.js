const express = require("express");
const app = express();
const posts = require("./posts.js");
const hits = require("./hits.js");

app.get("/posts", (req, res) => {
  if (req.query.error) {
    return res.status(500).json({ error: "Server error" });
  }

  const delay = Number(req.query.delay) || 0;
  setTimeout(() => {
    res.status(200).json(posts);
  }, delay);
});

app.get("/hits", (req, res) => {
  if (req.query.error) {
    return res.status(500).json({ error: "Server error" });
  }

  const delay = Number(req.query.delay) || 0;
  setTimeout(() => {
    res.status(200).json(hits);
  }, delay);
});

app.post("/posts/favourites/:id", (req, res) => {
  if (req.query.error) {
    return res.status(500).json({ error: "Server error" });
  }

  res.status(200).json({ success: true });
});

app.post("/hits/likes/:id", (req, res) => {
  if (req.query.error) {
    return res.status(500).json({ error: "Server error" });
  }

  res.status(200).json({ success: true });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
