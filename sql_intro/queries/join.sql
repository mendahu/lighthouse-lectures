SELECT
  books.id,
  books.title,
  books.year,
  authors.name
FROM books
JOIN authors ON authors.id = books.author_id;