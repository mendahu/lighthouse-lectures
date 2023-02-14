DROP TABLE IF EXISTS astronauts;
DROP TABLE IF EXISTS agencies;

CREATE TABLE IF NOT EXISTS agencies (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  founded INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS astronauts (
  id serial PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  destination VARCHAR(255),
  agency_id INTEGER REFERENCES agencies(id) ON DELETE CASCADE
);