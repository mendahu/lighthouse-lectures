-- Get the bottom 5 authors names by quantity books written

SELECT authors.name, COUNT(books.*)
FROM books
JOIN authors ON books.author_id = authors.id
GROUP BY authors.name
ORDER BY COUNT(books.*) ASC, authors.name
LIMIT 5;