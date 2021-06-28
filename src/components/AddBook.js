import React, { useRef, useState } from "react";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddBook = (props) => {
  const titleRef = useRef("");
  const authorRef = useRef("");
  const isbnRef = useRef("");

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const addBookHandler = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const isbn = isbnRef.current.value;

    if (
      title.trim().length === 0 ||
      author.trim().length === 0 ||
      isbn.trim().length === 0
    ) {
      setError({
        title: "Empty Input?",
        message: "All fields must be filled",
      });

      return;
    }

    if (isbn < 0) {
      setError({
        title: "Invalid ISBN",
        message: "Enter valid ISBN",
      });

      return;
    }

    props.addBook(title, author, isbn);

    titleRef.current.value = "";
    authorRef.current.value = "";
    isbnRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <h2 className="text-center text-light bg-dark py-2 h2">Add a new book</h2>
      <form onSubmit={addBookHandler} className="p-3">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input className="form-control" type="text" ref={titleRef} />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input className="form-control" type="text" ref={authorRef} />
        </div>
        <div className="mb-3">
          <label className="form-label">ISBN</label>
          <input className="form-control" type="number" ref={isbnRef} />
        </div>
        <div className="d-grid">
          <Button type="submit" className="btn btn-outline-primary">
            Add Book
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddBook;
