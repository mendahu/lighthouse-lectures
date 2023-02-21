SELECT
  city as name,
  COUNT(r.id) as total_reservations
FROM reservations r
JOIN properties p
  ON property_id = p.id
GROUP BY city
ORDER BY total_reservations DESC;


SELECT 
  id,
  name,
  email
FROM properties
WHERE email = 'me@jakerobins.com'


const email = Me@JakeRobins.com

client.query(MY_QUERY, [email.toLowerCase()])