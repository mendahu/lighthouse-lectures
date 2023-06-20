const net = require("net");
const port = 3000;

const tcpserver = net.createServer();

tcpserver.on("connection", (connection) => {
  console.log("hello world");
});

tcpserver.listen(port, () => {
  console.log("Listening on port ", port);
});
