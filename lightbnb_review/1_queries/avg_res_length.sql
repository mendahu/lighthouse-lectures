SELECT
  AVG(end_date - start_date) as average_duration
FROM reservations;

SELECT users.*
FROM users
WHERE email = 'me@jakerobins.com'