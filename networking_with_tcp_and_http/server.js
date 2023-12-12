const net = require("net");

const server = net.createServer();

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

const connections = [];

// setup new connections
server.on("connection", (connection) => {
  // store all connections inside array
  // array is declare outside the function
  // it will travel with it as a closure
  connections.push(connection);

  console.log("New client connected!");

  connection.write("Hello there!\n");

  const callback = (message) => {
    console.log("Client says: ", message);

    // send message to all connections
    for (const conn of connections) {
      if (conn === connection) {
        continue;
      }
      conn.write(message);
    }

    // connections.forEach((conn) => {
    //   if (conn === connection) {
    //     return;
    //   }
    //   conn.write(message);
    // })
  };

  connection.on("data", callback);

  // callback("hey hey hey")

  connection.setEncoding("utf-8");
});
