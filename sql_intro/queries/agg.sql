SELECT COUNT(*) FROM books;
SELECT COUNT(*) FROM authors;

SELECT MIN(year) FROM books;

SELECT MAX(year) FROM books;

-- GROUP BY WITH AGG FUNCTION
SELECT authors.name, COUNT(books.id)
FROM books
JOIN authors ON authors.id = books.author_id
GROUP BY authors.name;

-- GROUP BY WITH AGG FUNCTION AND MULTIPLE COLS
SELECT authors.name, year, COUNT(books.id)
FROM books
JOIN authors ON authors.id = books.author_id
GROUP BY authors.name, year; -- note two group bys

-- GROUP BY WITH NO AGG FUNCTION
SELECT authors.name 
FROM books
JOIN authors ON authors.id = books.author_id
GROUP BY authors.name;

SELECT year
FROM books
GROUP BY year;