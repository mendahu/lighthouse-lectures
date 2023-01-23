const express = require("express");
const PORT = 8080;
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(`/index.html`);
});

app.listen(PORT, () => console.log("Listening on port ", PORT));
