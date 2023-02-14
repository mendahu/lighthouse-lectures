const { client } = require("../db");

const getAllAstronauts = () => {
  return client.query(
    `SELECT
        astronauts.id, 
        astronauts.name,
        destination,
        agencies.name as agency
      FROM astronauts
      JOIN agencies 
        ON agencies.id = astronauts.agency_id
      ORDER BY astronauts.id ASC`
  );
};

const updateAstronautDestination = (id, destination) => {
  return client.query(`UPDATE astronauts SET destination = $1 WHERE id = $2`, [
    destination,
    id,
  ]);
};

const addAstronaut = (name, agencyId, destination) => {
  return client.query(
    `INSERT INTO astronauts (name, agency_id, destination) VALUES ($1, $2, $3) RETURNING id, name, agency_id, destination`,
    [name, agencyId, destination]
  );
};

module.exports = { getAllAstronauts, updateAstronautDestination, addAstronaut };
