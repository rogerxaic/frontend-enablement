export async function search(query) {
  const result = await fetch(`http://openlibrary.org/search.json?q=${query}`, {
    method: "GET",
    redirect: "follow",
  }).then((response) => response.text());

  const books = JSON.parse(result);

  const booksParsed = {};
  books.docs.forEach((book) => {
    const b = {
      ...book,
      author: book.author_name && book.author_name[0],
      isbn: book.isbn && book.isbn[0],
    };
    booksParsed[b.isbn] = b;
  });

  return Object.values(booksParsed);
}
