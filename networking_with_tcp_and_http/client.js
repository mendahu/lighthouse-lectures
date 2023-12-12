const net = require("net");

const config = {
  host: "localhost", // 127.0.0.1
  port: 8080,
};

const client = net.createConnection(config);

client.setEncoding("utf-8");

client.on("data", (message) => {
  console.log("Server says: ", message);
});

client.on("connect", () => {
  console.log("Connected to server!");
});

process.stdin.on("data", (input) => {
  client.write(input);
});

client.on("end", () => {
  console.log("Server disconnected, closing client");
  process.exit();
});
