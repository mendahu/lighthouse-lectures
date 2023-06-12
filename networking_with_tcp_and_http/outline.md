# TCP and HTTP

### What is network?

- Communication between machines on a network
- In theory, any machine on the network should be able to communicate with any other machine on the network

### Clients and Servers

- The majority of networking is made up of server/client connections
- In general, servers have information and clients want information
- The labels define the role of that interaction, not the permanent job of the individual machine

### OSI Model and Network Layers

- Networking is built on a stack of different layers which we can refer to as the OSI model (Open Systems Interconnection Model)
- You can do some fun googling if you want to learn more, but the important thing to know about this model is that there are layers, and each layer is built on top of the previous one.
  - The lowest level being hardware
- In this lecture we're going to focus on three different technologies that operate in different layers of the model, and we'll learn about them from the bottom up
- As web developers we get to kind of assume that the lower levels are already taken care of

## IP - Internet Protocol

- Layer 3
- This uniquely identifies the machine on the network (think "street address")
- Comes in two flavours: IPv4 and IPv6
  - `1.102.103.104`
  - `2001:db8:3333:4444:5555:6666:7777:8888`
- The port identifies the application (think "apartment number")
- We have 65,535 ports to choose from (per internet connection)
- Popular ports:
  - HTTP: 80
  - HTTPS: 443
  - FTP: 21
  - SMTP: 25
  - SSH: 22
  - Postgres: 5432

## TCP / UDP

- Break data into packets to be sent over the network layer
- Give each packet a header with origin and destination
- **UDP**: **U**ser **D**atagram **P**rotocol
  - Smaller header size (8 bytes) which results in smaller packet sizes
  - _Connectionless_ ie. there is no need to establish or maintain a connection
  - No error recovery (any corrupted packets are discarded)
  - Packets can arrive in any order
  - Useful for streaming/low latency applications
- **TCP**: **T**ransportation **C**ontrol **P**rotocol
  - Larger header size (20 bytes)
  - Requires a connection (3-way handshake)
  - Corrupted packets are reported to the server and are re-sent
  - Packets arrive in order
  - Useful when guaranteed communication is needed

# TCP Chat Server Demo

### Create the server

```js
// server.js
const net = require("net");
const port = 54321;

// create the tcp server
const server = net.createServer();

// start the server listening
server.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});
```

### Create the client

```js
// client.js
const net = require("net");

const config = {
  host: "localhost",
  port: 54321,
};

const client = net.createConnection(config);
```

### Add `connection` listener

```js
// add connection event listener
server.on("connection", () => {
  console.log("a new client has connected");
});
```

### Send a message from the server to the client

```js
// server.js
server.on("connection", (connection) => {
  console.log("a new client has connected");

  // send a message to the client
  connection.write("hello there!");
});
```

```js
// client.js
client.on("data", (messageFromServer) => {
  console.log("Server says:", messageFromServer);
});
```

- The data is sent over as a buffer; set the encoding to utf-8

```js
client.setEncoding("utf-8");
```

### Send a message from the client to the server

```js
// client.js
client.write("hey hey hey");
```

```js
// server.js
server.on("connection", (connection) => {
  console.log("a new client has connected");

  // send a message to the client
  connection.write("hello there!");

  // listen for an incoming message
  connection.on("data", (messageFromClient) => {
    console.log("client says:", messageFromClient); // can use .trim() to remove the new line
  });

  // set the encoding to utf-8
  connection.setEncoding("utf-8");
});
```

### Listen to stdin and send that to the server

```js
// client.js
process.stdin.on("data", (data) => {
  client.write(data);
});
```

### End process if server connection ends

```js
client.on("end", () => {
  console.log("Connection from server ended.");
  process.exit();
});
```

### Echo the message to all connected clients

```js
// server.js
// array to hold connections
const connections = [];

// add connection event listener
server.on("connection", (connection) => {
  console.log("a new client has connected");

  // send a message to the client
  connection.write("hello there!");

  // add this connection to our connections array
  connections.push(connection);

  // listen for an incoming message
  connection.on("data", (messageFromClient) => {
    console.log("client says:", messageFromClient.trim());

    for (const con of connections) {
      con.write(messageFromClient.trim());
    }
  });

  // set the encoding to utf-8
  connection.setEncoding("utf-8");
});
```

```js
// server.js
// don't send the message back to the original sender
for (const con of connections) {
  if (con !== connection) {
    con.write(messageFromClient.trim());
  }
}
```

### Stretch: Allow the clients to customize their name

```js
// server.js
connection.on("data", (messageFromClient) => {
  console.log("client says:", messageFromClient.trim());

  // check for incoming command
  if (messageFromClient.startsWith("setName:")) {
    const name = messageFromClient.split(" ")[1].trim();
    return (connection.username = name);
  }

  for (const con of connections) {
    if (con !== connection) {
      con.write(`${connection.username} says: ${messageFromClient.trim()}`);
    }
  }
});
```

### Stretch: Prevent the server trying to send messages to non-connected clients

```js
// server.js
for (const con of connections) {
  console.log("finished", con._writableState.finished);
  if (con !== connection && !con._writableState.finished) {
    con.write(`${connection.username} says: ${messageFromClient.trim()}`);
  }
}
```

# Protocols Part II: HTTP

### Popular protocols

- FTP -> File Transfer Protocol
- SMTP -> Simple Mail Transfer Protocol
- XMPP -> Extensible Messaging and Presence Protocol (used by Slack!)
- SSH -> Secure Shell

### HTTP

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
