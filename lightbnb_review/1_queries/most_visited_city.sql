SELECT
  city as name,
  COUNT(r.id) as total_reservations
FROM reservations r
JOIN properties p
  ON property_id = p.id
GROUP BY city
ORDER BY total_reservations DESC;