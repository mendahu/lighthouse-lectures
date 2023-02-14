INSERT INTO agencies (id, name, founded) VALUES
  (1, 'NASA', 1958),
  (2, 'ESA', 1975),
  (3, 'CSA', 1989),
  (4, 'Roscosmos', 1992),
  (5, 'CNSA', 1993);

INSERT INTO astronauts (name, destination, agency_id) VALUES
  ('Kayla Barron', 'ISS', 1),
  ('Matthias Maurer', 'ISS', 2),
  ('Thomas Marshburn', 'ISS', 1),
  ('Raja Chari', 'ISS', 1),
  ('Oleg Artemyev', 'ISS', 4),
  ('Denis Mateev', 'ISS', 4),
  ('Sergey Korsakov', 'ISS', 4),
  ('Ye Guangfu', 'Tiangong', 5),
  ('Wang Yaping', 'Tiangong', 5),
  ('Zhai Zhigang', 'Tiangong', 5);
