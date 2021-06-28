import { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";

const App = () => {
  const [book, setBook] = useState([]);

  const addBookHandler = (title, author, isbn) => {
    setBook((prvBooks) => {
      return [...prvBooks, { title, author, isbn }];
    });
  };
  console.log(book);

  return (
    <div className="container-fluid app">
      <div className="row">
        <h1 className="text-center mt-5">Book List App</h1>
        <div className="col-md-6 p-5">
          <div className="card text-dark">
            <AddBook addBook={addBookHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
