# W03D01 - Web Servers 101

### To Do

- [ ] Networking Review
- [ ] Web Servers
- [ ] Express
- [ ] Middleware
- [ ] Templating

## HTTP Review

- We talked about TCP/IP - this is very basic for sending information

```js
// client
connection.write("Hello World");

// server
connection.on("data", (msg) => {
  // handle the msg
});
```

- HTTP is a tech designed to amp up the String of Text to 11 and do more with it
- HTTP defines what we transmit over TCP - what shape is the data, what is the nature of our request, things like that
- HTTP uses a TCP connection, one time use request and response pattern
- HTTP requests are Stateless.
- Extra info included in HTTP Requests include:
  - Method: (verb) a description of what category of request you're making (GET, POST, PUT, PATCH, DELETE)
  - Path (location) - this is a route/sub location inside of a server, ie `/users` or `/`
  * HTTP responses have status codes
    - 2xx series codes which are SUCCESS
    - 3xx series which are redirections
    - 4xx series are user error (404 Not Found)
    - 5xx series are server error
  * Headers in a request and a response which can add meta-data
  * Body which contains most of the data applicable to your request

# Web Servers

- What is it???

- Why HTTP for Web Servers
- TCP does not have enough fucntionality to do complicated web applications
- Cookies or authentication, complex data requirements, paths for sub components of applications

- What is a web server?
- Hardware and Software that serve an application
- Handles HTTP requests
- The responses may be HTML, CSS, JavaScript, you can send files like images or videos, pure data in say something like JSON
- HTTP is built on TCP and IP, which means we need a address and port associated
  - HTTP is port 80
  - HTTPS is port 443

## Express

- Node is a versatile application - multipurpose
  - Web Servers are one application that it can do
- Node is "close to the metal" - you can do anything with it - you have lots of power
  - downside: complex, lots of boilerplate, slow
- Since developers have made a lot of servers in their day, we've built up an ecosystem of toolign to help expedite this
- Express is one such tool
- Rice Cooker Analogy - Node is cooking with pots and measuring cups and timers, Express is a Rice Cooker
- LHL teaches Express, but others exist as well (eg. Hapi, Koa)

// Return at :19 past the hour

## Express Middleware

- The real hero of Express is their middleware functionality
- Middleware is code that runs before or after a request handler

# Intro to Templating

- Static HTML files are great but they are not always the most useful
- Templating allows us to add dynamic info to responses
