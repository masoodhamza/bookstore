import { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import AllBooks from "./components/AllBooks";

const App = () => {
  const [books, setBooks] = useState([]);

  const addBookHandler = (title, author, isbn) => {
    setBooks((prvBooks) => {
      return [...prvBooks, { title, author, isbn }];
    });
  };

  return (
    <div className="container-fluid app">
      <div className="row">
        <h1 className="text-center mt-5">Book List App</h1>
        <div className="col-md-6 p-5">
          <div className="card text-dark">
            <AddBook addBook={addBookHandler} />
          </div>
        </div>
        <div className="col-md-6 p-5">
          <div className="card text-dark">
            <AllBooks books={books} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
