INSERT INTO agencies (id, name, founded) VALUES
  (1, 'NASA', 1958),
  (2, 'ESA', 1975),
  (3, 'CSA', 1989),
  (4, 'Roscosmos', 1992),
  (5, 'CNSA', 1993),
  (6, 'JAXA', 2003);

INSERT INTO astronauts (name, destination, agency_id) VALUES
  ('Francisco Rubio', 'ISS', 1),
  ('Nicole Mann', 'ISS', 1),
  ('Josh Cassada', 'ISS', 1),
  ('Koichi Wakata', 'ISS', 6),
  ('Sergey Prokopyev', 'ISS', 4),
  ('Dmitry Petelin', 'ISS', 4),
  ('Anna Kikina', 'ISS', 4),
  ('Fei Junlong', 'Tiangong', 5),
  ('Deng Qingming', 'Tiangong', 5),
  ('Zhang Lu', 'Tiangong', 5);
