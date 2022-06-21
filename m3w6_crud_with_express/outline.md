### To Do

- [ ] Implement CRUD over HTTP with Express
- [ ] Render data for the user using EJS templates
- [ ] Use forms to submit HTTP requests
- [ ] Explore the Post-Redirect-Get pattern
- [ ] Using Chrome DevTools to see requests and responses
- [ ] Practice debugging Express

# CRUD and BREAD

- Vocabulary: Resource
  - what is a resource
  - do some examples from real websites
- Acroynyms: CRUD and BREAD
- Which is better?

# Introduce a Resource

- Get the students to pick a resource

# Build an Express Server

- `const express = require('express')`
- `const app = express()`
- `const PORT = 8080`
- `app.listen(8080, () => console.log('Server listening on port 8080'))`
- Simple `/` route with a Hello World
  - `res.send()`

# Database

- Create an object to store data
- Add sample data (at least three)

# Scaffold

- Explain METHODS and PATHS
- scaffold out different bread operations
- add the normal route path and method
  - discuss REST and why we do it this way

# Browse

- GET
- Show what it looks like if you use the browser before the route exists
- Look at requests in Browser tools
- Install morgan to show request
  - `const morgan = require('morgan')`
  - `app.use(morgan('dev'))`
- Start with `res.send()` and put some HTML in
  - Why isn't this useful?
- `res.render`
- Make a browse EJS template for all resources
  - Talk about the `views` vocabulary and folder structure
- talk about Template Variables, pass in resource
- Show Morgan/Dev tools to see better request data now

# Read

- GET
- Getting query params from the path
  - access database with id
- `res.render` again
- Make a Read EJS template for one resource
- templateVars again
- Update Browse view to link to Read view
- Update Read view to go back to Browse
- Show Morgan/Dev Tools for better request data now

# Edit

- POST, PUT or PATCH?
- Update Read View to have an edit form
- `<form>` tags
  - submit functionality
  - path/method (action/method)
  - body - how does it get data from the form????
  - `name` attribute of the `<input>` tag
- Handle the request on the server
- `res.redirect` vs `res.render`
  - Show POST / REDIRECT / GET pattern
  - Show in Morgan/Dev Tools

# Add

- Make new Add view to create a new resource
- Set up GET route to serve it
- Make another form
  - name attributes again
  - get students to build this one together
- set up POST route to handle the request
- `res.redirect` to new resource
  - Show in morgan/Dev Tools

# Delete

- Update Read View to have a delete button
- Another form with POST to delete
  - Why is this a form when there are no inputs?
- Make POST route to handle
- `res.redirect` to Browse
  - Show in Morgan/dev Tools
