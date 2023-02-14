const { client } = require("../db");

const getAllAgencies = () => {
  return client.query(`
    SELECT name, id FROM agencies;
  `);
};

const getAgencyById = (id) => {
  return client.query(
    `
    SELECT id, name FROM agencies WHERE id = $1`,
    [id]
  );
};

module.exports = { getAllAgencies, getAgencyById };
