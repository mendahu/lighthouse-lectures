const express = require("express");
const methodOverride = require("method-override");

const postsRouter = require("./posts_router.js");
const commentsRouter = require("./comments_router.js");

const app = express();

const PORT = 8000;

app.use(methodOverride("_method"));
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
