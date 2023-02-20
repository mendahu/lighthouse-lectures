SELECT
  r.id,
  p.title,
  cost_per_night,
  start_date,
  AVG(rating) as average_rating
FROM reservations r
JOIN properties p ON p.id = r.property_id
JOIN property_reviews pr ON pr.property_id = p.id
WHERE r.guest_id = 1
GROUP BY r.id, p.title, cost_per_night
ORDER BY start_date ASC
LIMIT 10;