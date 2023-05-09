# Rails Review

## Model View Controller

- **Model:** Responsible for handling data logic (eg. database queries)
- **View:** Responsible for the UI (User Interface)
- **Controller:** Ties the model and view together, talks to both and shares data between them
- Rails also uses a router (`routes.rb`) sitting between the user requests and the controllers that respond to those requests
- MVC can be interpreted in a lot of ways
  - Classically, MVC includes any front end logic as part of the controller - ie everything past the button click is controller
    SHOW DIAGRAMA
  - In Web, we tend to move that line back to the HTTP request, leaving a little of the logic for the front end
  - In addition, Rails as a slightly different take from "classic" MVC
  - In Rails the Model only communicates with the controller
    SHOW DIAGRAM

## MVC and Roles of web parts

- Looking at Jungle and all the projects in your LHL history, we can start to think about web architecture a little more holistically now, especially in the context of MVC
- SHOW Diagrams
  - Talk through different projects
  - Explain roles

## Rails Check In

- So how is everyone feeling about Rails?
- What do you like about it or not like about it?
  - Look for: Generators, view functions/shortcuts, Active Record ORM, router, forms
    - Explain each as needed
  - Making the grunt work of CRUD ops fast and simple
  - Doing it the Rails Way
    - Incorporating front-end javascript - easy or hard?
- Thinking back to our conversation about learning outcomes for Ruby/Rails, how are you feeling about that.
  - Reading others code
  - Starting with an app and working on it
  - Breadth, not depth
  - Just get it done
- Migrations?
  - Explain as needed
- Anyone thinking about using Rails for their final?
  - API Only?
  - SHOW Diagram

## Possible Rails Review Topics

### Migrations

- What is a migration?
  - Migrations are instructions, or records, of how a db schema was put together
  - any permanent change to a db structue (not data itself, but tables, indices, views, etc) are recorded in migrations
  - If I want to create a copy of the production db, all I have to do is run all the migrations in order
  - Migration software keeps track of which step a db is at, and so when you add a new migration file to make a change to your schema, you can incrementally adjust it to the next step as needed
- Some migration software makes you give it raw SQL
  - Others allow you to write another language which it transpiles into SQL for you
  - Active Record does this in Rails - you write the migration in Ruby and it changes it to SQL on the backend
  - Using generators to make your migration for you
- Why is this a nice idea?
- Why isn't it?
- JavaScript alternatives - Knex, Prisma

## Models

- Models in Rails are Ruby representations of underlying database tables
- methods on the classes represent queries - ways to interact with the table
- This is a way to write Ruby instead of SQL, and to save yourself some time
- ORMs in JavaScript can do this to (Knex, Prisma)
- Models handle relational connections for you, which is nice
- Pros
  - Easy to spin up
  - Safe from stupid mistakes
  - Save you time from having to write the same steps over and over with every app
  - Easy syntax
- Cons
  - Less customizable - when you have specific use cases for dbs, it can get harder and harder to make ORMs work
  - Non-transferrable skill

### Router

- Compare the router to Express
- Note how the route definitions are in one file and the callbacks are in the controller
- Routes are easily generated through a rails short hand
- The Rails Way - simple REST CRUD ops

### Controllers

- It's like if the callbacks from your Express routes were all defined elsewhere and then passed in!
- Connected to your model

### Views

- Just like EJS
  - similar syntax!
  - Template vars come from Controller
- built in Rails functions to make your life easier
- Forms are especially nice
  - Helper functions eliminate tedious code, connect to models, and more
