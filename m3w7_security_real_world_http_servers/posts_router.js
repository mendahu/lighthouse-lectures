const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // stuff happens here
  const posts = [
    {
      id: 1,
      val: "I went to the beach today!",
      date: new Date(),
    },
    {
      id: 2,
      val: "I went to the beach today!",
      date: new Date(),
    },
    {
      id: 3,
      val: "I went to the beach today!",
      date: new Date(),
    },
    {
      id: 4,
      val: "I went to the beach today!",
      date: new Date(),
    },
  ];
  // res.send("BROWSE posts");
  // res.render('EJS')
  // res.redirect("/")
  res.json(posts);
});

router.get("/:id", (req, res) => {
  // stuff happens here
  res.send("READ post");
});

router.post("/:id", (req, res) => {
  // stuff happens here
  res.send("UPDATE post");
});

router.post("/new", (req, res) => {
  // stuff happens here
  res.send("ADD post");
});

router.post("/:id/delete", (req, res) => {
  // stuff happens here
  res.send("DELETE post");
});

router.get("/:id/comments", (req, res) => {
  // stuff happens here
  res.send("BROWSE comments");
});

module.exports = router;
