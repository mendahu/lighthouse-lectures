# W03D01 - Web Servers 101

### To Do

- [ ] Networking Review
- [ ] Web Servers
- [ ] Express
- [ ] Middleware
- [ ] Templating

### What are Web Servers

- Recall - TCP sends strings
- TCP has the confirmation schema behind it, this 3 way handshake to confirm receipt of data
- When we build a web server, we're gonna need more!!!!
  - Cookies
  - Authentication information
  - Organize data inside a request - url, paths, port, type of request (method), body of data or maybe parameters
  - Web server to be able to send back useful information, more than a string - files, pictures, json, videos
- A web server is hardware, or software, or both that understands web addresses , understands the HTTP protocol, it can serve files to clients
  - Listening for requests on a specific PORT ....(TCP)
  - Web server generally replies using HTTP
  - HTTP responses are sent back with status codes

### Express

- Express is a framework - a package of constraints, tools, features to build a specific type of thing - in this case, a web server
- Express main job - simplifying route handlers
- Express is third party - Open JS foundation maintains it - not Node!!

RETURN as 11:12 PST / 2:12 EST

## Three Big Express Features

### Sending Files

- Express can send files using the `sendFile()` method of your app.
- Saves you time!!! wooo

### Middleware

- Code that runs (usually its a function) in between requests and responses and your handler
- Middleware intercepts requests and response
- Middleware is extensible - Express gives you the power to use middleware, but anyone can write middleware
