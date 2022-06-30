const fs = require("fs");
const request = require("request");

// read
fs.readFile("files/name.txt", "utf8", (err, name) => {
  //inside here we can do stuff with data

  if (err) {
    return console.error(err);
  }

  // agify API request
  request(`https://api.agify.io?name=${name}`, (err, res, body) => {
    if (err) {
      return console.error(err);
    }

    const { name, age, count } = JSON.parse(body);
    const msg = `${name} is probably ${age} years old? Who knows? This has been asked ${count} times!!!`;

    // write
    fs.writeFile("files/result.txt", msg, "utf8", (err) => {
      if (err) {
        return console.error(err);
      }

      console.log("File written successfully!!!");
    });
  });
});
