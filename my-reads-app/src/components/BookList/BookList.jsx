import { useEffect, useState } from "react";
import { getAll, update } from "../BooksAPI";
import Book from "../Book/Book";
import BookShelf from "../BookShelf/BookShelf";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const currentlyReadingBooks = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
  const readBooks = books.filter((book) => book.shelf === "read");

  useEffect(() => {
    getAll().then(setBooks);
  }, []);

  const moveToOtherShelf = (book, shelf) => {
    update(book, shelf).then(() => {
      book.shelf = shelf;
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    });
  };

  return (
    <section className="books-list">
      <main className="books-list-content">
        <BookShelf
          title="Currently Reading"
          books={currentlyReadingBooks}
          onMoveToShelf={moveToOtherShelf}
        />
        <BookShelf
          title="Want to Read"
          books={wantToReadBooks}
          onMoveToShelf={moveToOtherShelf}
        />
        <BookShelf
          title="Read"
          books={readBooks}
          onMoveToShelf={moveToOtherShelf}
        />
      </main>
    </section>
  );
};

export default BookList;
