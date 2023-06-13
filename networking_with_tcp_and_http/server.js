const net = require("net");
const port = 54321;

const server = net.createServer();

server.listen(port, () => {
  console.log("the server is listening on port ", port);
});

const connections = [];

server.on("connection", (connection) => {
  connections.push(connection);

  console.log("a new client is connected.");

  connection.setEncoding("utf-8");

  connection.write("Welcome! Please enter your name:");

  connection.on("data", (messageFromTheClient) => {
    if (messageFromTheClient.startsWith("setName:")) {
      const name = messageFromTheClient.split(":")[1].trim();
      connection.username = name;
      console.log(connection.username);
      return;
    }

    console.log("Client says: ", messageFromTheClient.trim());

    for (const conn of connections) {
      console.log(conn.username);
      if (conn !== connection) {
        conn.write(
          `${connection.username} says: ${messageFromTheClient.trim()}`
        );
      }
    }
  });
});

// callback(connection)
