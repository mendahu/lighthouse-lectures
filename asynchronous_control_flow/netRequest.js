const https = require("https");

https.get("https://weatherapi-com.p.rapidapi.com/future.json", (res) => {
  let data = [];

  res.on("data", (chunk) => {
    data.push(chunk);
  });

  res.on("end", () => {
    console.log(JSON.parse(Buffer.concat(data).toString()));
  });
});

console.log("End of file.");
