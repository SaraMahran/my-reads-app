import { useEffect, useState } from "react";
import { search, update, getAll } from "../BooksAPI";
import Book from "../Book/Book";
import "./SearchBooks.css";

const SearchBooks = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [shelvedBooks, setShelvedBooks] = useState([]);

  useEffect(() => {
    getAll().then((books) => {
      setShelvedBooks(books);
    });
  }, []);

  const handleSearchBooks = (event) => {
    const query = event.target.value;
    setQuery(query);

    if (query) {
      search(query, 20).then((results) => {
        if (results && !results.error) {
          const mergeResults = results.map((searchResult) => {
            const shelvedBook = shelvedBooks.find(
              (b) => b.id === searchResult.id
            );
            return {
              ...searchResult,
              shelf: shelvedBook ? shelvedBook.shelf : "none",
            };
          });
          setSearchResults(mergeResults);
        } else {
          setSearchResults([]);
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  const changeBookShelf = (book, shelf) => {
    update(book, shelf).then(() => {
      book.shelf = shelf;
      setSearchResults(searchResults.map((b) => (b.id === book.id ? book : b)));

      const updateShelvedBooks = shelvedBooks
        .filter((b) => b.id !== book.id)
        .concat(book);
      setShelvedBooks(updateShelvedBooks);
    });
  };

  return (
    <section className="books-search">
      <section className="books-search-bar">
        <input
          type="text"
          placeholder="Search by book title or author's name... "
          value={query}
          onChange={handleSearchBooks}
        />
      </section>

      <section className="books-search-result">
        <ol className="books-grid">
          {searchResults.length > 0 ? (
            searchResults.map((book) => (
              <li key={book.id}>
                <Book book={book} onMoveToShelf={changeBookShelf} />
              </li>
            ))
          ) : (
            <li className="no-result-message">No results found</li>
          )}
        </ol>
      </section>
    </section>
  );
};

export default SearchBooks;
