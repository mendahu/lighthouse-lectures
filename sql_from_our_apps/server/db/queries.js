const client = require("./db");

const getAllAstronauts = () => {
  return client
    .query(
      `SELECT
      astronauts.id,
      astronauts.name,
      agencies.name as agency,
      destination
    FROM astronauts
    JOIN agencies ON agencies.id = astronauts.agency_id`
    )
    .then((response) => {
      return response.rows;
    });
};

const updateAstronautDestination = (id, destination) => {
  return client
    .query(
      `
      UPDATE astronauts
      SET destination = $2
      WHERE id = $1
    `,
      [id, destination]
    )
    .then((response) => {
      return response.rows;
    });
};

const addAstronaut = (name, agency_id, destination) => {
  return client
    .query(
      `
    INSERT INTO astronauts (name, agency_id, destination)
    VALUES ($1, $2, $3)
    RETURNING id, name, agency_id, destination
  `,
      [name, agency_id, destination]
    )
    .then((response) => {
      return response.rows[0];
    });
};

const getAllAgencies = () => {
  return client
    .query(
      `
    SELECT id, name FROM agencies;
  `
    )
    .then((response) => {
      return response.rows;
    });
};

module.exports = {
  getAllAgencies,
  getAllAstronauts,
  updateAstronautDestination,
  addAstronaut,
};
