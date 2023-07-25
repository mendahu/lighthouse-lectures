-- Get the amount of books written between 2010-2020

SELECT COUNT(books.*)
FROM books
WHERE year BETWEEN 2010 AND 2020;

SELECT COUNT(books.*)
FROM books
WHERE year >= 2010 AND year <= 2020;

