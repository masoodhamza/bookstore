import { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import AllBooks from "./components/AllBooks";

const App = () => {
  const [books, setBooks] = useState([
    {
      title: "The Grass is Always Greener",
      author: "Jeffrey Archer",
      isbn: 1860920497,
    },
    {
      title: "Murder!",
      author: "Arnold Bennett",
      isbn: 1860920128,
    },
  ]);

  const addBookHandler = (title, author, isbn) => {
    setBooks((prvBooks) => {
      return [{ title, author, isbn }, ...prvBooks];
    });
  };

  const deleteBookHandler = (isbn) => {
    setBooks((prvBooks) => {
      return prvBooks.filter((book) => book.isbn !== isbn);
    });
  };

  return (
    <div className="container-fluid app">
      <div className="row">
        <h1 className="text-center text-light mt-5">Book List App</h1>
        <div className="col-md-5 p-5">
          <div className="card">
            <AddBook addBook={addBookHandler} />
          </div>
        </div>
        <div className="col-md-7 p-5">
          <div className="card">
            {books.length < 1 && <div>Book list is empty</div>}
            {books.length > 0 && (
              <AllBooks books={books} deleteBook={deleteBookHandler} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
