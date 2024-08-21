import Book from "../Book/Book";
import "./BookShelf.css";
const BookShelf = ({ title, books, onMoveToShelf }) => {
  const shelfClassName = `book-shelf-${title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
  return (
    <section className={`book-shelf ${shelfClassName}`}>
      <h2 className="book-shelf-title">{title}</h2>
      <section className="book-shelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onMoveToShelf={onMoveToShelf} />
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
};

export default BookShelf;
