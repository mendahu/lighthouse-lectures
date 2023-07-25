SELECT id, title, year
FROM books
ORDER BY year DESC
LIMIT 10;

SELECT id, title, year
FROM books
ORDER BY year DESC
LIMIT 10 -- page 2
OFFSET 10;