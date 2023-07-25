-- Get a list of all author names who have written a book in the last 5 years

SELECT authors.name
FROM books
JOIN authors ON books.author_id = authors.id
WHERE year > 2018
GROUP BY authors.name
ORDER BY authors.name;