# Web Servers 101

## Review Networking

### HTTP REVIEW

(since we missed it!)

- **H**yper**T**ext **T**ransfer **P**rotocol
- With our TCP client/server, we were just sending unformatted raw buffers, basically strings.
- We didn't provide any kind of structure to that or standard
- On top of TCP we can add this structure by adhering to a protocal called HTTP
- HTTP defines how we transmit data over TCP and what data is in it and in what shape
- Call and response communication
- _State-less_: no memory of any previous communication
- Routes to resources are made up of methods (verbs) and paths
- **METHODS**: GET, POST, PUT, PATCH, DELETE
- **PATHS**: `/users`, `/unicorns/123`
- Returns status codes for each communication (eg. 200, 202, 302, 404, 500)
- Response headers contain information about the response such as media type and content size
- Reponse body contains the content (JSON, html, etc)

- We talked last about:
  - Networking layers - IP, TCP/UDP
  - Made a TCP Chat application
  - Show NODE diagram, recall how Node interacts with the hardware, specifically networking, and how it ran a server instance to manage the connection
  - Briefly talked about HTTP, which is what we're going to build on next.
  - Remember that HTTP requests have a method (GET, POST, etc), a url/path

## Why HTTP for a Web Server?

- Recall that TCP was just sending strings.
- TCP has a confirmation that the string was received but beyond that there is little functionality
- When we build a web server, we're going to need more features, like cookies, authentication, a way to organize data in a request, such as url, path, port, type of request, request body and parameters
- We need a way for a server to make useful responses with similar information, including files
- HTTP builds on top of TCP and with it, we will be able to make our very first web server
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

## What is a Web Server

- From MDN: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server
- A web server is hardware, software or both, which understand web addresses and the HTTP protocol in order to serve files via HTTP to clients
- A web server generally functions over HTTP
- A web server listens for requests and serves responses back to the client
- Files could include images, videos, HTML, JS, CSS, pure data like JSON and more
- A web server listens on a specific PORT (since it is build on TCP)
- HTTP responses have a status code

## Web Server vs TCP Server

<!-- simple-servers.js -->

```js
const net = require("net");
const tcpport = 3000;

const tcpserver = net.createServer();

tcpserver.on("connection", (connection) => {
  connection.write("hello world");
});

tcpserver.listen(tcpport, () => {
  console.log(`the server is listening on port ${tcpport}`);
});

const http = require("http");
const httpport = 3001;

const httpserver = http.createServer();

httpserver.on("request", (request, response) => {
  response.write("hello world");
  response.end();
});

httpserver.listen(httpport, () => {
  console.log(`server listening on port ${httpport}`);
});
```

- Similarities
  - listens on a specific port
  - use Node to create an instance to listen
  - uses Node events to trigger callbacks, event names are different though
- Differences
  - response writing is a little different
  - we also have access to a request object that is a little different

## Expanding our Web Server to do more

- Using the protocol specs of HTTP, we can do a lot more with our HTTP server
- Let's explore methods and paths in our request

<!-- server-with-http-methods-paths.js -->

```js
// add custom routes to the `createServer` function
const server = http.createServer((req, res) => {
  const route = `${req.method} ${req.url}`;

  switch (route) {
    case "GET /":
      res.statusCode = 200;
      res.end('This is a GET request to "/"');
      break;
    case "GET /users":
      res.statusCode = 200;
      res.end('This is a GET request to "/users"');
      break;
    default:
      res.statusCode = 404;
      res.end("Route not found");
  }
});
```

- Note that we can change the variable names of the callback - req and res are idiomatic
- Notice how we can access any information from the request using the callback's first argument
- Show node documentation for request
- Show difference between write and end
- Demonstrate different paths

## Express, and why we use it

- So far we have been using Node, and only Node, to make our little test http servers
- Node has the capability to do all this, which is great
- Node, however, is "close to the metal" and is a really extensible, flexible, full features set of networking tools that we don't always need access to during the specific use case of a Web Server.
  - Node can do a lot more than just Web Servers!
- Since web servers are very common, however, we might find benefit in using a framework on top of Node to streamline our development. Some problems this can solve for us:
  - Make syntax for routes, methods, responses and requests easier to use
  - Automate and simplify some common things that we do with web servers
  - Give us tools to make dynamic content responses
- There are many frameworks that do this, but the one we teach here at Lighthouse is Express
- Express's main job is to simply route handler creation
- Rice cooker analogy
  - Node is a stove, a pot, a measuring cup
  - Express is a rice cooker

<!-- express-server.js -->

- `npm i express`

```js
// basic Express server
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('thanks for visiting "/"');
});

app.get("/users", (req, res) => {
  res.send('thanks for visiting "/users"');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
```

What's different about Expess compared to plain http package?

- require third party package installation
- app methods for each http method, takes a path string and a callback
- new response method name (send)

## Sending a file

- We are not limited to sending strings with HTTP
- We can send a whole HTML file, too - this is how you serve websites
- Make simple HTML

```html
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <h1>Welcome to my website</h1>
    <p>I hope you have a great time. Check out my cool links.</p>
  </body>
</html>
```

```js
res.sendFile(`${__dirname}/index.html`);
```

## Middleware

- Code (functions) which run between requests and responses
- Express leverages the idea of middleware to give you a tool to intercept requests and responses with common code
- Middleware is extensible - Express gives you the tool, but you can use it with other packages to extend the power of Express.

```js
const express = require("express");
const app = express();
const morgan = require("morgan");

// let Express know to use the middleware
app.use(morgan("dev"));
```

- Morgan simply logs request/responses to the console for debugging, information, etc
- The morgan package runs on the response, noting information coming in and the request, noting information going out
- middleware can be chained

## Custom middleware

- We can write our own middle ware, not just use third party packages!
- A middleware just has to have a callback function which takes in req, res and next functions
- Let's implement our own simple version of morgan

```js
app.use((req, res, next) => {
  // do something with the request and/or response objects
  console.log(`New request: ${req.method} ${req.url}`);

  // call the next step in the middleware chain
  next();
});
```

## Intro to Templating

- Static HTML files are nice, but they are not very useful
- Dynamic content allows us to have more useful, customized information in what we server
- We build "templates" and inject them with variables to accomplish this
- Express has a templating function as part of it, and we can attach any third party tempalting engine we like right into Express
- EJS is the templating engine we will be teaching at Lighthouse, though there are others

`npm i ejs`

```js
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const templateVars = {
    message: "hello there",
    username: "Jake Robins",
    age: 37,
  };

  res.render("index", templateVars);
});
```

```ejs
<!-- views/index.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Index Page</title>
</head>
<body>
  <h1>Custom Template</h1>
  <h2>Message: <%= message %></h2>
  <h2>You are logged in as <%= username %> and are <%= age %> years old</h2>
</body>
</html>
```

- Show request response pattern in dev tools
- Show how the html string was rendered with variables
- Demonstrate the `set` method of express
