import { useEffect, useState } from "react";
import { getAll, update } from "../BooksAPI";
import Book from "../Book/Book";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then(setBooks);
  }, []);

  const MoveToOtherShelf = (book, shelf) => {
    update(book, shelf).then(() => {
      book.shelf = shelf;
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    });
  };
  return (
    <section className="books-list">
      <main className="books-list-content">
        <section className="bookshelf-currently-reading">
          <h2 className="currently-reading-books-title">Currenlty Reading</h2>
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === "currentlyReading")
              .map((book) => (
                <li key={book.id}>
                  <Book book={book} onMoveToAnotherShelf={MoveToOtherShelf} />
                </li>
              ))}
          </ol>
        </section>
        <section className="bookshelf-want-to-read">
          <h2 className="want-to-read-books-title">Want to Read</h2>
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === "wantToRead")
              .map((book) => (
                <li key={book.id}>
                  <Book book={book} onMoveToAnotherShelf={MoveToOtherShelf} />
                </li>
              ))}
          </ol>
        </section>
        <section className="bookshelf-read">
          <h2 className="read-books-title">Read</h2>
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === "read")
              .map((book) => (
                <li key={book.id}>
                  <Book book={book} onMoveToAnotherShelf={MoveToOtherShelf} />
                </li>
              ))}
          </ol>
        </section>
        {/* <section className="bookshelf-none">
          <h2 className="none-books-title">None</h2>
          <ol>
            {books
              .filter((book) => book.shelf === "none")
              .map((book) => (
                <li key={book.id}>
                  <Book book={book} onMoveToAnotherShelf={MoveToOtherShelf} />
                </li>
              ))}
          </ol>
        </section> */}
      </main>
    </section>
  );
};

export default BookList;
