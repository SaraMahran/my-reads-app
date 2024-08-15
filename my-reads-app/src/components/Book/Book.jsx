import "./Book.css";
const Book = ({ book, onMoveToAnotherShelf }) => {
  const handleShelfChange = (event) => {
    onMoveToAnotherShelf(book, event.target.value);
  };

  return (
    <section className="book">
      <section className="book-top">
        <section
          className="book-cover"
          style={{
            width: 130,
            height: 170,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        ></section>
        <section className="book-shelf-changer">
          <select onChange={handleShelfChange} value={book.shelf}>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </section>
      </section>
      <section className="book-title">
        <h6>{book.title}</h6>
      </section>
      <section className="book-author">
        <h6>{book.authors.join(", ")}</h6>
      </section>
    </section>
  );
};

export default Book;
