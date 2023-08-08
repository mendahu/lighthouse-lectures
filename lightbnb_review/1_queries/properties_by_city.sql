SELECT
  properties.id,
  city,
  title,
  cost_per_night,
  AVG(rating) as average_rating
FROM properties
LEFT JOIN property_reviews
  ON property_reviews.property_id = properties.id
WHERE city LIKE '%anvouc%'
GROUP BY properties.id
HAVING AVG(rating) >= 4
ORDER BY cost_per_night ASC
LIMIT 10;