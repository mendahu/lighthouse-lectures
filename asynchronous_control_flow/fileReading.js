const fs = require("fs");

const data = fs.readFile(
  "./myBigFile.txt",
  { encoding: "utf8" },
  (err, data) => {
    console.log(data);
  }
);

console.log("End of file");
