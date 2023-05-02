# Project Planning

- [ ] What are projects? What is project management?
- [ ] Types/Methodologies of project planning
  - [ ] Waterfall
  - [ ] Agile
  - [ ] Scrum
- [ ] How to Plan a Software Project

## What is a project?

- an undertaking, a thing you are doing which delivers something of value at the end
  - projects are going to have "requirements"

## Types of Project Planning

- There are lots of types - you're gonna see two big ones in the wild
  - Waterfall, and Agile

## Waterfall

- Comes from classical engineering practices, usually based in phsyical goods and creation (bridges, airplanes, conveyor belts of manufcaturing stuffff)
- Waterfall is a linear, sequential thing
  - each step depends on the one before

### PROS and CONS

PROS

- Clear goals - Waterfall has pretty intense planning and user stories, definitions of done, etc
- Documentation tends to be better
- Easy to measure progress
- Reduces wasted product
- Price/timeline can be better predicted\*\*\*

CONS

- Doesn't adapt well to changes
- No TDD?
- How do you deal with uncertainty
- No user feedback until the end, when you deliver

## Agile

- Internet is a big driver - ability to connect to central sources and get updates means we can deliver continuously
- Break down software into steps and deliver it one step at a time (as long as each step is useful to a user\*)
- 2001 - book called Manifesto for Agile Software Development

### Features

- A focus on individuals and interactions rather than processes and tools
- Software that works > documentation
- Collaboration with the customer > contract negotiation
- Responding to change over following a plan

- Agile revolves around continuous delivery - new stuff coming out perpetually

### PROS and CONS

PROS

- adapts well to changes
- gets software to user faster
- Makes client part of process
- High utlization of devs

CONS

- Requirements are fuzzier, not as high standard
- Limited to certain projects
- individuals can be a liability
- Harder to bring on new team members with no docs
- Makes client part of process
- "Sparkly new features > bug fixes or reliability"
- Software in alpha forever

## Scrum

-Agile methodology

- Sc(r)um is a way to organize people to make software

### Features

- Scrum ideas include teams of 10 or fewer people
  - often a cross-functional
- Groups work in 1-4 week periods called Sprints
  - At the beginning you decide what you want to work on
  - At the end, you deliver that feature
  - At the end you have a meeting to demonstrate the product to the client (Sprint Review)
  - And also a meeting to talk about what worked and what didn't (Sprint Retrospective)
  - And then finally, eveyr day there is a Stand up "Scrum" meeting
- Scrum teams have some key roles
  - Product Owner (Product Manager) - owns the backlog, liaises with the business
  - Developers - that's you!
  - Scrum Master (Scrumlord) - A coach, they help the devs stay productive and remove roadblocks and keep the wheels turning

### Backlog

- Scrum/Agile has a "product backlog" owned by the Product Owner
- List of everything we need to build
- User stories
  - user stories may be related to one larger arc
- The order of the backlog is important - product owner is often curating, distilling, rearranging the order by priority
- at the beginning of a sprint, everyone goes tot he top of the list and picks the things they can accomplish in their sprint

Return at 7 minutes past the hour!!!

# How to Plan a Project

1. User Stories/Requirements
2. Database Design (ERD)
3. Routes/Endpoints
4. Wireframes
5. Create Repository
6. Project structure/conventions
7. Task/Time Managements
8. Communication

### Time Management

- In Scrum(b) there is a practice of "sizing" user stories
  - Every company does it a little differently
  - pick a number on the Fibonnacci Sequence
  - 1, 1, 2, 3, 5, 8, 13, 21, 34...
- How do you figure out how long something is gonna take????
- Time tracking
- I recomend a software called Harvest

### Architecture

- At the beginning of a project you have to make some decisions

- Do I write some code myself or use a library
- What if anything do I need to serve tthe roles of db, backend, frontend, etc.
- Do I learn a new thing that is optimized for my use case, or use a thing I already know that is maybe less efficient?

#### What are pieces of architecture for the final?

- Node

  - Postgres for db
  - Backend - Node.JS
    - Framework like Express for HTTP
    - `node-postgres` for your ORM
  - Frontend
    - React or jQuery
    - EJS for Templates (view handler)

- Ruby on Rails
  - Postgres for db
  - Backend - Ruby
    - Framework is Rails (Express and EJS and also Active Record which is your ORM)
  - Frontend
    - Rails templating (ERB files)
    - OR React or jQuery

React Router

### Routes

- `/orders?user_id=1`? OR `/users/1/orders`
