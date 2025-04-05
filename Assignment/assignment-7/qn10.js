const books = [
  {
    title: "C",
    author: "Dennis Ritchie",
  },
  {
    title: "C#",
    author: "Anders Hejlsberg",
  },
  {
    title: "python",
    author: "Anders Hejlsberg",
  },
  {
    title: "JavaScript",
    author: "Brendan Eich",
  },
];

function getBook(author) {
  const result = books.filter((book) => book.author === author);
  return result.length > 0 ? result : null;
}
const booksbyAnders = getBook("Anders Hejlsberg");
if (booksbyAnders) {
  booksbyAnders.forEach((book) => {
    console.log(book.title);
  });
}
