import React, { useRef } from "react";
import Button from "./Button";

const AddBook = (props) => {
  const titleRef = useRef("");
  const authorRef = useRef("");
  const isbnRef = useRef("");

  const addBookHandler = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const isbn = isbnRef.current.value;

    props.addBook(title, author, isbn);

    titleRef.current.value = "";
    authorRef.current.value = "";
    isbnRef.current.value = "";
  };

  return (
    <form onSubmit={addBookHandler} className="p-3">
      <h2 className="text-center h2">Add new book</h2>
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
  );
};

export default AddBook;
