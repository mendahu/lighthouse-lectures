# Rails Review

- [ ] Model View Controller
- [ ] Architectures and MVC
- [ ] Rails Feelings and Checkin
- [ ] Optional Rails Review Topics
  - [ ] Migrations
  - [ ] Models
  - [ ] Router
  - [ ] Controllers
  - [ ] Views

# MVC

- MODEL
  - That is responsible for handling data logic (database queries, data processing)
- VIEW
  - Responsible for the UI (what the user sees)
- CONTROLLER
- What ties the model and the View together, train conductor, sends data from different models to different views
- MVC can be interpreted in a lot of different ways
- In web we move the UI back and the controller behind the HTTP network layer

- Jungle Project - and all LHL projects

  - Tinyapp MVC???
    - Model - that fake urls / users object, CRUD ops functions to alter the objects
    - Controller - your endpoints
    - Views - EJS Templates
  - Midterm
    - We had routers to bundle endpoints into logical controller groupings
    - Database queries Model
    - Views the same
  - React
    - Kind of MVC????
    - Hooks - Model
    - Component logic - controller
    - JSX - Views

- Router - Rails has a router (routes.rb)

## Rails Check In

- Rails has some big tools - Generators, Active Record, Active View (form helpers)
- Migrations ?
- Rails for final??
  - Rails has an API only mode
- How popular is rails?

## Models

- What are models?
  - Models are a Ruby representation of the underlying database tables
  - `users` table? There might be a `User` Model.
  - ORM (Object Relation Mapping) or Model
- BREAD/CRUD
- Pro
  - The other advantage - you can write in a different language
  - Saves you from silly mistakes
  - Easy syntax
- Con
  - Not understanding the underlying interaction
  - Long term - is this a transferrable skill
- JS ORMs
- RAW Mode (ORM)

## Migrations

- What is a migration ( a database migration )
- Migrations are instructions/records of changes to databases over time
- You can always recreate a database by running the migrations in order
- Migrations have a forward and back
- Migration software often adds a table to the database that tracks its current state
- In Active Record, we write our migrations in Ruby
- In Rails you can have generators make migrations for you
- JS Versions of these -> Prisma also handles migrations. Knex handles migrations. `db-migrate`
- Accessible via `rails db:[command]` https://guides.rubyonrails.org/active_record_migrations.html

: 02 past the hour

## Router

- Fully automated router configuration
  - connects to models and controllers!!!
- Customizable if necessary, or do it the Rails Way™ and get automation!

## Controllers

- Each method is a route handler,c alled from the router
- add your own methods for code reuse

## Views

- RAils and Views - Active View
- ERB files - Embedded RuBy templating
- Similar to EJS
  - Template Variables come from the controller
- A whole bunch of rails helper methods https://guides.rubyonrails.org/action_view_helpers.html
- Presentation heleprs to make displaying data way easier
- Form helpers in Rails are very powerful
-

https://www.toptal.com/ruby/ruby-concurrency-and-parallelism-a-practical-primer
