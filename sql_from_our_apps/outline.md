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

```js
const pg = require("pg");

const config = {
  user: "postgres",
  password: "postgres",
  database: "astrostatus",
  host: "localhost",
  port: 5432,
};

const client = new pg.Client(config);

client.connect().then(() => {
  console.log("Connected to Database");
});

client.query(`SELECT * FROM astronauts`).then((res) => console.log(res));
```

- Show response from the postgres pg library, explain how you'll often have to drill down to `res.rows`

## Protecting App Secrets

- The username, password, database name, port, host - all of these configs are considered privileged information. Knowing any or all of these gives you some ability to connect to this database
- We should protect these, which means that we probably don't want them showing up in our GitHub repository - we don't want to commit the actual data here.
- We can use enviornment variables to set them instead
- Simply, you can put an env variable in the start command. Let's try it with the port

```sh
DB_PORT=5432 nodemon server.js
```

```js
const DB_PORT = process.env.DB_PORT;
```

- Generally however, if you have a lot of variables and want an easy way to modify them, we use a `.env` file and access it with a package like `dotenv`

```sh
touch .env
npm i dotenv
```

```js
require("dotenv").config();
```

```
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_NAME=astrostatus
```

```js
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
};
```

- Remember to include .env in your gitignore!

## Serving Data

### Home Page Display

- Let's connect our front page view to a simple select statement
- Show pre-made view
- Setup route to render the view with some sample data

```js
app.get("/", (req, res) => {
  // sample data to test that view works
  const templateVars = {
    astronauts: [
      {
        name: "Jake",
        agency: "CSA",
        destination: "ISS",
      },
    ],
  };
  res.render("index", templateVars);
});
```

- Work up to this query incrementally
  - Take the chance to talk about aliasing

```js
client
  .query(
    `SELECT 
        astronauts.name as name, 
        destination,
        agencies.name as agency
        FROM astronauts 
        JOIN agencies on agencies.id = astronauts.agency_id`
  )
  .then((res) => console.log(res.rows));
```

- Move our res.render into the .then
- Show variable collision problem

```js
client
  .query(
    `SELECT 
        astronauts.name as name, 
        destination,
        agencies.name as agency
        FROM astronauts 
        JOIN agencies on agencies.id = astronauts.agency_id`
  )
  .then((response) => {
    const templateVars = {
      astronauts: response.rows,
    };
    res.render("index", templateVars);
  })
  .catch((err) => {
    console.error(err);
    const templateVars = {
      astronauts: [],
    };
    res.render("index", templateVars);
  });
```

### Refactoring to use Query Functions

- First, let's refactor our database client into its own file. This is a common pattern to seaprate out its configuration and to make it importable into other files

- create a `db.js` file in `/db`
- refactor database config to be in that file
- move over dotenv, etc
- export it

- Let's refactor this to use a query function
- In most full stack apps, it's best practice to separate the query from the routing file
- this is a separation of concerns issue - these are discrete functions, and we may want to reuse them in different routes

- Create a queries folder in the server folder
- Add an `astronauts.js` file
- create `getAllAstronauts`

```js
const { client } = require("../db");

const getAllAstronauts = () => {
  return client.query(
    `SELECT 
        astronauts.name as name, 
        destination,
        agencies.name as agency
        FROM astronauts 
        JOIN agencies on agencies.id = astronauts.agency_id`
  );
};
```

- Export it `module.exports = { getAllAstronauts }`
- Import it to main server file and refactor
- This is a very common pattern!!!

### Change destination

- Let's add a feature to change an astronaut destination

- Add `id` to query (`astronauts.id as id`)
- Add column to table

```html
<td>
  <form action="/astronauts/<%= a.id %>/update" method="POST">
    <button type="submit">Send to:</button>
    <input name="destination" />
  </form>
</td>
```

- Make a query
  - Talk about parameters to the query

```js
const updateAstronautDestination = (id, destination) => {
  return client.query(
    `UPDATE astronauts SET destination = '${destination}' WHERE id = '${id}'`
  );
};
```

- Review path of requests from client to server
- Highlight roles and responsibilities

### Parameterization

- We did something bad in this query
- Let's demonstrate a SQL Injection Attack
- `ISS'; DROP TABLE astronauts; UPDATE agencies SET name = 'BANANA`
- Change Query to Paremeterized Prepared Statement

```js
const updateAstronautDestination = (id, destination) => {
  return client.query(`UPDATE astronauts SET destination = $1 WHERE id = $2`, [
    destination,
    id,
  ]);
};
```

### AJAX Query

- Let's add a new astronaut
- Let's do it the AJAX way
- Create front-end form

```html
<h2>Send astronaut to space!</h2>
<form>
  <label for="name">Name</label>
  <input name="name" />
  <label for="agency">Agency</label>
  <input name="agency" />
  <label for="destination">Destination</label>
  <input name="destination" />
  <button type="submit">Send to Space!</button>
</form>
```

- Make Javascript

```js
$(document).ready(() => {
  $("body > form").submit(function (e) {
    e.preventDefault();
    console.log("sent!");
  });
});
```

- Update click handler

```js
const data = $(this).serialize();
$.post("/api/astronauts/new", data)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));
```

- Talk about select options for agencies - how can we get this in?
- Need this data available on the front end first.
- Let's add a query
- Create `/db/agencies.js`

```js
const getAllAgencies = () => {
  return client.query("SELECT id, name FROM agencies");
};
```

- Import it in to server.js using a chain method

```js
getAllAstronauts()
  .then((response) => {
    templateVars.astronauts = response.rows;
    return getAllAgencies();
  })
  .then((response) => {
    templateVars.agencies = response.rows;
  })
  .catch((err) => {
    console.error(err);
    templateVars.astronauts = [];
    templateVars.agencies = [];
  })
  .finally(() => {
    res.render("index", templateVars);
  });
```

- Add dropdown

```html
<select name="agency">
  <% for (const a of agencies) { %>
  <option value="<%= a.id %>"><%= a.name %></option>
  <% } %>
</select>
```

- Add API Route

```js
app.post("/api/astronauts/new", (req, res) => {
  const { name, agency, destination } = req.body;
  addAstronaut(name, agency, destination)
    .then((response) => {
      res.json(response.rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({});
    });
});
```

- Front End updates table
- Create row func

```js
const createRow = (name, id, destination, agency_id) => {
  const $row = $(`
    <tr>
    <td>${name}</td>
    <td>${agency_id}</td>
    <td>${destination}</td>
    <td>
      <form action="/astronauts/${id}/update" method="POST">
        <button type="submit">Send to:</button>
        <input name="destination" />
      </form>
    </td>
  </tr>`);

  return $row;
};
```

- Append in /then

```js
$("tbody").append(createRow(res.name, res.id, res.destination, res.agency_id));
```

- One last problem - Agency ID is not usable!
- Make getAgencyById query

```js
const getAgencyById = (id) => {
  return client.query("SELECT id, name FROM agencies WHERE id = $1", [id]);
};
```

- add to route handler

```js
app.post("/api/astronauts/new", (req, res) => {
  const { name, agency, destination } = req.body;
  const astronaut = {};

  addAstronaut(name, agency, destination)
    .then((response) => {
      const { name, id, agency_id, destination } = response.rows[0];

      astronaut.name = name;
      astronaut.id = id;
      astronaut.destination = destination;

      return getAgencyById(agency_id);
    })
    .then((response) => {
      console.log(response);
      astronaut.agency = response.rows[0].name;
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    })
    .finally(() => {
      res.json(astronaut);
    });
});
```
