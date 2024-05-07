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

# MVC Model View Controller

* Model - Responsible for data logic - interface to the db
* View - Responsible for the User Interface
* Controller - Traffic Cop - responsible for tying the model and the view together and running any kind of necessary logic
- Rails also add a router (routes.rb) that sits between the user's requests and the controller. 
- MVC can be interpreted lots of ways

# Rails Check In

- Developer Experience
  - Setup
- Abstraction
- CLI Tooling
  - Generators
- Opinionated
- Anyone want to use rails for your final?
  - Rails React
- Models/Active Record
  - Abstracted Interface
  - Less Syntax
  - ORM 

  :08

# Migrations

- Migrations are instructions/records of how the database schema changes over time
- Any permanent change to the db structure (tables, cols, views, indices) are recorded in migrations
- Migrations end up like git commits for your db
- Software to help you manage this
  - make a table in the db with a version
- Rails uses Active Record to author migrations with Ruby

# Views