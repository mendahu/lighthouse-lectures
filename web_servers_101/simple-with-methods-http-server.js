const http = require("http");
const port = 3001;

const httpserver = http.createServer();

httpserver.on("request", (request, response) => {
  console.log(request.method, request.url);

  if (request.url === "/") {
    response.statusCode = 200;
    response.end("This is a Get Request to /");
    return;
  }

  if (request.url === "/users") {
    response.statusCode = 200;
    response.end("This is a Get request to /users");
    return;
  }

  response.statusCode = 404;
  response.end("Path not found.");
});

httpserver.listen(port, () => {
  console.log("http server listening on port ", port);
});
