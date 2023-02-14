const pg = require("pg");
require("dotenv").config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
};

const client = new pg.Client(config);

client.connect().then(() => {
  console.log("Connected to database!!!");
});

module.exports = { client };
