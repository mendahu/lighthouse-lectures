# SQL Intro

## Why Databases?

- So far in our journey we've covered the front-end and we've covered the backend. But the final piece we're missing in the Full Stack are databases
- Databases serve a very special role storing data that needs to _persist_. Persistent data does't go away after a user logs out, or a session restarts, or the server restarts. It is long-term storage
- Application Data is also considered dynamic so its different from data that would live in your code repo.
- Data is probably heavily related to user activity but not as a rule
- Data is often the most important and valuable piece of an application. IT can't easily be replaced if lost, so we put a lot of structure and safeguards in palce to keep it safe.

- Databases represent a third component to our application stack
- Our Front end handle user interactivity and visual representation
- Our backend handles application logic, source code
- Our database handles data
- SHOW FULL STACK PNG

- Becoming good with databases is a really valuable skill on the career path of a Full-Stack Developer.

## RDBMS

- There are two big types of databases out there, and the one that we teach is called a _Relational Database_. Relational Databases, sometimes called _Relation DataBase Management Systems_ or _SQL Databases_, are robust, powerful, flexible and scalable. So they are very common out there in the world.
- The relational part of the name refers to how the system keeps track of how different data types relate to eachother. So if you have a list of authors as one piece of data and a list of books as another, the db knows which author writes which book.
- RDBMSes communicate with backend servers over TCP and custom proprietary protocols instead of HTTP.

## Structured Data and SQL

- RDBMSes are read from using a special query language called SQL.
- the S in SQL stands for _Structured_, and refers to how RDBMSes store their data in very structured and constrained ways.
- The highest delineation of data in an RDBMS is a table. Each table represents a single Entity, or type of data. We've talked about entities before - they're nouns that represent the data in our app like books or authors.
- SHOW TABLES PNG
- Inside of a table, we have rows and columns. In DBs we call these Records and Fields.
- Fields represent the common properties of the table (all records have these fields) while records represent individual pieces of data in the table.
- SHOW RECORDS PNG
- Records have a Primary Key which is a unique identifier we can use to reference it
- When we reference it from another table, we refer to it as a Foreign Key

## Postgres and Tooling (psql)

- We teach Postgres at this bootcamp
- Postgres is one implementation of an RDBMS
- Another good choice would be MySQL, which is a bit simpler in terms of features
- In addition to Postgres, we also use a tool called `psql` which is a separate piece of software.
- `psql` is like a Front-end for a database. It allows you direct access to it to make changes, look at the data, test queries, etc.
- Your application won;t use `psql` to access the db - its only for us as developers.

## Basic SQL Syntax and SELECT

- When querying RDBMSes, we use SQL, which is a new language you're going to add to your toolbelt along with JavaScript and CSS and HTML, etc.
- SQL queries look like this:
  (Make test.sql)

```sql
SELECT id, title FROM books;
```

- When using keywords, convention is to capitalize them
- SQL queries must end with a `;`
- SQL queries can be multiline, and we do this a lot to increase readability

```sql
SELECT
  id,
  title
FROM books;
```

- The first feature to learn in SQL queries is the `SELECT` statement
- `SELECT` essentially gets data. Most of the time, we combine it with a `FROM` clause to tell us which table to get it from, and we enumerate the fields (columns) we want to see. Then it returns all the records which match.

- You can use \* to select all fields in a table, though I tend to avoid this because it isn't explicit enough for me

```sql
SELECT * FROM books;
```

## Filtering and Ordering

-SQL uses the `WHERE` clause to filter results. It's like an IF statement on your query

- Each WHERE clause has to satisfy to TRUE if it will be showed

```sql
SELECT id, title, year
FROM books
WHERE year > 2010;
```

```sql
SELECT id, title, year
FROM books
WHERE year > 2010 AND year < 2015;
```

- You can order your results using the `ORDER BY` clause
- You can add a DESC or ASC variable

```sql
SELECT id, title, year
FROM books
ORDER BY year DESC
```

## JOINs

- The relational database power is really unleashed with joins
- This allows us to combine the data from two tables into a single query
- there are a few types of joins:
- INNER JOIN - default, returns only records that have matches on the other table
- LEFT JOIN - includes left table entries with no match
- RIGHT JOIN - includes right table entries with no match
- FULL OUTER JOIN - includes all entries from both tables

```sql
SELECT
  books.id,
  books.title,
  books.year,
  authors.name
FROM books
JOIN authors ON authors.id = books.author_id;
```

- Note how we have to include the table name in the fields now using a dot notation
- the ON clause tells the query which data to base the join off of

## GROUP BY and Aggregate Functions

- SQL is a programming language and it has functions!
- A special group of functions called Aggregate Functions are useful for deriving meta-data about your data.

- `COUNT` - Counting amount of records
- `SUM` - Summing values of group of records
- `MIN` - Minimum value in group of records
- `MAX` - Maximum value in group of records
- `AVG` - Average value in group of records

```sql
SELECT COUNT(books.id) FROM books;
SELECT COUNT(books.id) FROM books WHERE author_id = 1;

SELECT MIN(books.year) FROM books;
```

- When using aggregate functions you may find it useful to group records with common values

```sql
SELECT authors.name, COUNT(books.id)
FROM books
JOIN authors ON books.author_id = authors.id
GROUP BY authors.name;
```

- This isn't just useful for aggregate functions though. Anytime you ahve records with common values, you can group.

```sql
SELECT authors.name FROM books
JOIN authors ON books.author_id = authors.id;
-- returns a record for each book
-- duplicates appear because authors write more than one book
-- adding group by would give us a list of each unique author that has written a book
GROUP BY authors.name
```

## LIMIT and OFFSET

- You can limit amount of records returned using the LIMIT clause.
- Useful for getting top, top 10, etc.

```sql
SELECT id, title, year FROM books ORDER BY year DESC LIMIT 10;
-- gets the 10 newest books
```

- OFFSET can be used to get the next X amount

```sql
SELECT id, title, year FROM books ORDER BY year DESC LIMIT 10
OFFSET 10;
-- gets the 10 newest books
```

- We use this for pagination

## EXERCISES IF TIME

- Complete the following as a group

1. Get a list of all author names who have written a book in the last 5 years
2. Get the amount of books written between 2010-2020
3. Get a list of all the authors names who have written at least one book in 2003
4. Get the author who has written the 3rd most books
5. Get the bottom 5 authors names by amount of books written
