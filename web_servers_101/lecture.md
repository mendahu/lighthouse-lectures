# W03D01 - Web Servers 101

### To Do

- [ ] Networking Review
- [ ] Web Servers
- [ ] Express
- [ ] Middleware
- [ ] Templating

## Review Networking

- OSI Model and Layers (7 layers) - IP, TCP
- TCP Chat Application
- Node Events, Callbacks
- Briefly talked about HTTP
  - This is built on TCP
  - HTTP kind of standardized the components of a request or a response

# Why HTTP for a web server?

- String parsing to get useful information - much more convenient than TCP
- When we build a web server - we're gonna need some advanced features
  - cookies
  - Authentication
  - data transmission (body or the query string)
  - key components of the transmission - url, path, method , port
- We need to have the ability to send meaningful requests and responses

# What is Web Server?

- MDN: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server
- Servers can be hardware and/or software
- software side - can respond to http requests and provide content
- Files that we send could be lots of things - HTML files, JavaScript files, CSS files, could be pure data, content like images or videos
- HTTP Servers will operate on a specific port
- HTTP Responses will generally have status codes

# Compare and contrast - TCP vs HTTP

# Express - What is it??

- So far we have been using Node JS packages to build http servers
- Node has the capability to do a lot
- Node can do more than just web servers
- how can we streamline web server development in a Node environment
- That's what Express does for us!!
- Express is a 3rd party package
  - simplify route definition, route handlers
  - makes working with responses and requests easier
  - gives us some tools for making dynamic content a little easier
- Express one of many frameworks

// RETURN at :10

# Middleware

- software that runs between the incoming request and before the response
- useful for stuff you need to do on every request
- middleware is useful for abstracting common code that might run on multiple routes/paths
  - logging, authentication, validation of data
- you can chain middleware to run multiple using the next() function

# Templating

- Static files are nice - but they are not very useful
- Templating is a way to get dynamic content
- Templates are like HTML files with variables
- The server injects data into the variables as part of a process called "rendering", which converts a tempalte + variables to a static HTML file
- Express is setup to plug in whatever tempalting engine you want, a templating engine being software that defines syntax for tempaltes and converts them
- We are going to learn EJS (Embedded JavaScript Template)
- EJS/Templating is Server-Side Rendered

# Trifecta of Web Tech

- HTML - What it is
- CSS - What it looks like
- JS - What it does
