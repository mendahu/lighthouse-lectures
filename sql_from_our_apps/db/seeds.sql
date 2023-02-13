INSERT INTO agencies (id, name, founded) VALUES
  (1, 'NASA', 1958),
  (2, 'ESA', 1975),
  (3, 'CSA', 1989),
  (4, 'Roscosmos', 1992),
  (5, 'CNSA', 1993);

INSERT INTO destinations (id, name, start_year) VALUES
  (1, 'ISS', 1998),
  (2, 'Tiangong', 2021);

INSERT INTO astronauts (name, agency_id, destination_id) VALUES
  ('Kayla Barron', 1, 1),
  ('Matthias Maurer', 2, 1),
  ('Thomas Marshburn', 1, 1),
  ('Raja Chari', 1, 1),
  ('Oleg Artemyev', 4, 1),
  ('Denis Mateev', 4, 1),
  ('Sergey Korsakov', 4, 1),
  ('Ye Guangfu', 5, 2),
  ('Wang Yaping', 5, 2),
  ('Zhai Zhigang', 5, 2);
