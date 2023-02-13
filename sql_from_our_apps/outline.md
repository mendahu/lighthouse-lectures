# SQL From Our Apps

## Fitting a DB into the Full Stack

- You've learned about SQL
- You've learned about ERDs and Database design
- Today we're going to hook the whole process into our existing knowledge of front-ends and backend
- We're going to make a full-stack application

- SHOW DIAGRAM
- I find it useful to think about your database as it's own separate entity as compared to the client and the server
- Even though in some infrastructures the database might be co located with the server, they effectively are different places/machines
- Consider this

  - The server communicates to a database over TCP/IP and a custom vendor-specific protocol
  - The database has its own IP address and port
  - The database has its own software that runs separately from node
  - It's really the third piece of a trifecta

- When we use these three pieces together, we put the server at the heart of everything we do. The server has one of the most important jobs because it is the traffic cop - its managing the client, the db, other APIs and more.
- Because our database is the most valuable part of an app - think of how useful a social media site would be without its users and posts etc - we shelter it away in its own place, and only allow our server to access it
- Clients _neveR_ connect to a database directly.
- Databases are password protected, and we have to take great care in protecting the credentials
- The server plays a big role in protecting it by acting as a gatekeeper to it.
- Today we're going to connect it all up and show it
- Your midterm will follow this pattern too - so pay attention to the structure here.

## Create a Database

- We're going to make an app that tracks all the locations of different astronauts in space.
- We'll keep track of destinations and we'll keep track of astronauts - so we'll need two tables and there will be a one to many relationship
- Then we'll make a little front-end to display it and also a form to update the data when astronauts fly home or launch to space

```sh
psql -U postgres
```

```SQL
CREATE DATABASE astrostatus;
```

- Show setup and seed files

```sh
\c astrostatus
\i db/setup.sql
\i db/seeds.sql
```

## Connect database to server

- show backend premade

  - note morgan, nodemon, express, ejs

- We mentioned that a database, whether postgres or something else, lives in a separate place from the server. This has a couple implications:
  - We'll need to connect to that place from the server using a web technology - in our case, we'll use TCP/IP and a custom vendor protocol for Postgres
    - We'll need to specify an address and a port
  - Our requests to the database will be asynchronous
  - We will protect it with a username and password
- We could write our own code in node to make a TCP IP Connection, and we could send requests using the POSTGRES protocol, but that is a lot of work, and since everybody writing a node app with postgres has to do that same job, there exists a library to do it for us.
- [Node Postgres](https://node-postgres.com)

```sh
npm i pg
```
