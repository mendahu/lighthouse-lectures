// const net = require("net");
const http = require("http");
const port = 3000;

// const server = net.createServer();
const server = http.createServer();

// server.on("connection", (connection) => {
//   console.log("New client connected");
//   connection.write("Hello, welcome to my server");
// });

server.on("request", (request, response) => {
  console.log(request.method);
  response.write("Hello! Welcome to the server");
  response.end();
});

server.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});
