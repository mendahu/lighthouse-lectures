const net = require("net");
const port = 54321;

const server = net.createServer();

server.listen(port, () => {
  console.log("Server is listening on port: ", port);
});

const connections = [];

// What to do with a connection
const connectHandler = (connection) => {
  console.log("A new client has connected!");

  connection.setEncoding("utf-8");

  connections.push(connection);

  connection.write("Hello there!");

  connection.on("data", (message) => {
    if (message.startsWith("SETNAME:")) {
      const name = message.split(":")[1].trim();
      connection.username = name;
      return;
    }

    console.log(`${connection.username} says: `, message);

    for (const conn of connections) {
      if (conn !== connection) {
        conn.write(`${connection.username}:${message}`);
      }
    }
  });
};

// what to do with the server
server.on("connection", connectHandler);
