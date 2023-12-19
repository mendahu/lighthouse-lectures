const http = require("http");
const port = 3001;

const server = http.createServer();

server.on("request", (req, res) => {
  // home page would be GET /
  const route = `${req.method} ${req.url}`;

  switch (route) {
    case "GET /": {
      // handle the request
      res.statusCode = 200;
      res.write("welcome to the home page");
      break;
    }
    case "GET /users": {
      // handle the users request
      res.statusCode = 204;
      break;
    }
    default: {
      // handle the not found request
      res.statusCode = 404;
      res.write("This page doesn't exist");
      break;
    }
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});
