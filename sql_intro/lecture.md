# SQL Intro

## To-do

- [ ] Why Databases?
- [ ] RDBMS, Structured Data and SQL
- [ ] Postgres and Tools (psql)
- [ ] Basic SQL Syntax and SELECT
- [ ] Filtering and Ordering
- [ ] JOIN
- [ ] GROUP BY and Aggregate Functions
- [ ] LIMIT and OFFSET

## Databases - Why do we care???

- Third component of our Full-stack
- Deals with dynamic, generally user-generated content/data
- Very important - must be kept safe!!
- Databases do all this for us

# RDBMS

- There are two big kinds of databases out there
- One of these is _Relational Database_ (or _Relational DataBase Management System_, or sometimes just _SQL Databases_).
  - Robust, powerful, flexible, scalable, these tend to be very common
  - Relational part refers to how the system keeps track of data
  - How is one table connected to another?
- RDBMS communicate with backend servers over TCP and a special proprietary custom protocol
- the other kind of DB is a No-SQL database (one example is MongoDB)

## Structured Data and SQL

- RDBMSes are read using a special query language called SQL
- The S in SQL stands for _Structured_ and that refers to how RDBMSes store the data in really strucutred and really constrained ways
- The highest delineation of data in an RDBMS is a table
  - each table is a single entity
  - Inside a table we have records and fields
  - Fields are the common properties of a table
  - Records are entries in that table
  - All records generally need a primary key
  - We can reference primary keys from other tables, in which case it is a foreign key

## Postgres and Tooling (psql)

- We teach an implementation of an RDBMS called Postgres
- Another good choice might be MySQL which is a bit simpler but still good
- In addition to Postgres we also use a tool called `psql`, which is a separate piece of software
- `psql` is like a front-end for your databases
- it's like your dev tools for postgres!!!
- Postgres vs Postgresql - same thing

# SQL

- When querying RDBMSes we use SQL which is a new language for you!

- The first feature to learn in SQL is the SELECT statement
- SELECT basically means _get some data_
- Often combined with FROM to tell it which table to go get it in
- Use \* to ask for all fields

## FILTERING and ORDERING

- SQL uses the `WHERE` clause to filter results. It's kind of like an IF statement
- Each records where WHERE evaluates to TRUE will be returned

- ORDERing,
- you can order results using the `ORDER BY` clause
- you can add a `DESC` or `ASC` variable

## JOINs

- The relational power of dbs is really unleashed with JOINs
- Combine tables into single query
- Four types of JOINS
  - INNER JOIN - default - returns records that have matches on the other table
  - LEFT JOIN - which includes the entries on the left table that have no matches
  - RIGHT JOIN - which includes the entries on the right table
  - FULL OUTER JOIN - which includes all entries from both tables

// RETURN AT :05 past the hour!!!

## GROUP BY and AGGREGATE functions

- SQL is a programming language, so it has functions!
- There are a special group of these functions which are called Aggregate Functions

- `COUNT` - counting amounts of records
- `SUM` - summing values of a records
- `MIN` / `MAX` - minimum and maximum value of records
- `AVG` - Average value in a group of records

- When using aggregate fnctions you may find it useful to group records with common values

- GROUP BY is not JUST for aggregate function though
- use it for any time rows are returned with the same values to group together

## LIMIT and OFFSET

- You can control the amount of results you get back from a SELECT statement
- LIMIT clause
- Useful for getting top 10, or best or bottom 3
