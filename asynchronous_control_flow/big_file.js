const fs = require("fs");

const callback = (err, data) => {
  if (err) throw err;
  console.log(data);
};

fs.readFile("./myBigFle.txt", { encoding: "utf8" }, callback);

console.log("end");

// callback(err, data)
