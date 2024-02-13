INSERT INTO agencies (id, name, founded) VALUES
  (1, 'NASA', 1958),
  (2, 'ESA', 1975),
  (3, 'CSA', 1989),
  (4, 'Roscosmos', 1992),
  (5, 'CNSA', 1993),
  (6, 'JAXA', 2003);

INSERT INTO astronauts (name, destination, agency_id) VALUES
  ('Jasmin Moghbeli', 'ISS', 1),
  ('Andres Mogensen', 'ISS', 2),
  ('Satoshi Furukawa', 'ISS', 6),
  ('Konstantin Borisov', 'ISS', 4),
  ('Oleg Kononenko', 'ISS', 4),
  ('Nikolai Chub', 'ISS', 4),
  ('Loral O''Hara', 'ISS', 1),
  ('Tang Hongbo', 'Tiangong', 5),
  ('Tang Shengjie', 'Tiangong', 5),
  ('Jiang Zinlin', 'Tiangong', 5);
