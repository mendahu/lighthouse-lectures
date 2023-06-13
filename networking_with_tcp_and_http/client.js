const net = require("net");

const config = {
  host: "localhost", // IP Address - localhost is a shorthand for 127.0.0.1
  port: 54321,
};

// localhost:54321
// 127.0.0.1:54321

const client = net.createConnection(config);

client.setEncoding("utf-8");

client.on("data", (messageFromTheServer) => {
  console.log(messageFromTheServer);
});

client.on("end", () => {
  console.log("Connection from server has ended.");
  process.exit();
});

// you can predefine event handlers, too!
const inputHandler = (data) => {
  client.write(data);
};

process.stdin.on("data", inputHandler); // defined above

// setName: Jake
