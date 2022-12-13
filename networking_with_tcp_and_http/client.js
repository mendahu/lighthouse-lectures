const net = require("net");

// Configure Connection
const config = {
  host: "localhost",
  port: 54321,
};

const client = net.createConnection(config);
client.setEncoding("utf-8");

// Set Handlers
client.on("connect", () => {
  console.log("Connected to server.");
});

client.on("data", (message) => {
  console.log(message);
});

client.write("Hi there, I am excited to be connected to you!");

process.stdin.on("data", (data) => {
  client.write(data);
});

client.on("end", () => {
  console.log("Connection to server ended.");
  process.exit();
});
