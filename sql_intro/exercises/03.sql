-- Get a list of all the authors names who have written at least one book in 2003

SELECT authors.name
FROM books
JOIN authors ON authors.id = books.author_id
WHERE year = 2003
GROUP BY authors.name;