const fs = require("fs");

// // synchronous

// const data = fs.readFileSync("./myFile.txt", "utf8");

// console.log(data);

// console.log("I am here");

// asynchronous

const callback = (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data);
};

fs.readFile("./myBigFile.txt", "utf8", callback);

console.log("I am here");
