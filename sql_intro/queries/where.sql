SELECT id, title, year
FROM books
WHERE year > 2010;

SELECT id, title, year
FROM books
WHERE year > 2010 AND year < 2015;

SELECT id, title, year
FROM books
ORDER BY year DESC;

SELECT id, title, year
FROM books
WHERE year > 2010
ORDER BY year DESC;