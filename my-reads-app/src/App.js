import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import SearchBooks from "./components/SearchBooks/SearchBooks";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />}></Route>
          <Route path="/search" element={<SearchBooks />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
