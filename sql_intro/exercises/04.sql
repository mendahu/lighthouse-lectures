-- Get the author who has written the 3rd most books

SELECT authors.name, COUNT(books.*)
FROM books
JOIN authors ON books.author_id = authors.id
GROUP BY authors.name
ORDER BY COUNT(books.*) DESC, authors.name
LIMIT 1
OFFSET 2;