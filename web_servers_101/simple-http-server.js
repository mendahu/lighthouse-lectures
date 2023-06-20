const http = require("http");
const port = 3001;

const httpserver = http.createServer();

httpserver.on("request", (request, response) => {
  console.log(request.method, request.url);
  response.write("Hello world! Welcome to my HTTP server.");
  response.end();
});

httpserver.listen(port, () => {
  console.log("http server listening on port ", port);
});
