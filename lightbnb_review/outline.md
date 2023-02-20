# LightBNB Review

- I've gone through and done everything you've done up to last week and we can talk through it a little bit

## ERD and SCHEMA

- Show ERD
- Talk through thought process
  - Data types
  - NOT NULL/DEFAULTs
- Denormalization conversation
  - Performance vs consistency
- Show Schema
  - ON DELETE discussion

## Queries

- Select \* vs Select columns
- HAVING and column aliases
- table name aliases in joins
- JOIN and LEFT JOIN intricacies

# Setting up the app

- What's it like to clone a template and figure it out?
- What was challenging about taking on this existing app?
- What are the steps you take to undertake that?
  - Package.json - scripts
  - server.js entry point
- Check out Express.Router() and api routes
  - How does a Router work?
  - What is the pattern of passing in the db queries and router to a function?

# Connecting the DB

- Go over the code again for connecting to the db
- Review how the pattern is slightly different from the previous lecture
  - How could we reorganize this?

# Queries

- Return promise pattern of queries
- Examine how exploring this first pre-written query went for me
- Spotted some weird layouts of the data (`properties` property is unnecessary)

# Other questions
