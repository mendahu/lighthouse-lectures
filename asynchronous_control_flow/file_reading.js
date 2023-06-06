const fs = require("fs");

const callback = (err, data) => {
  if (err) throw err;
  console.log(err);
  console.log(data);
};

const data = fs.readFile(
  "./myFile.txt",
  {
    encoding: "utf8",
  },
  callback
);

console.log(data);

console.log("I am here after data log");

// callback(err, data)
