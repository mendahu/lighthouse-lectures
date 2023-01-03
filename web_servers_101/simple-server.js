// const net = require("net");
// const tcpport = 3000;

// const tcpserver = net.createServer();

// tcpserver.on("connection", (connection) => {
//   connection.write("hello world");
// });

// tcpserver.listen(tcpport, () => {
//   console.log(`the server is listening on port ${tcpport}`);
// });

const http = require("http");
const httpPort = 3000;

const httpServer = http.createServer();

const getSlash = (response) => {
  response.statusCode = 200;
  response.write("You have reached the home page!");
  response.end();
};

httpServer.on("request", (request, response) => {
  const route = `${request.method} ${request.url}`;

  switch (route) {
    case "GET /": {
      getSlash();
      break;
    }
    case "GET /users": {
      response.statusCode = 200;
      response.write("Here are the users information!");
      response.end();
      break;
    }
    default: {
      response.statusCode = 404;
      // response.write("Not found!");
      response.end("Not found!");
    }
  }
});

httpServer.listen(httpPort, () => {
  console.log("Server is listening on port: ", httpPort);
});
