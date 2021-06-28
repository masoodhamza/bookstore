import React from "react";

const AllBooks = (props) => {
  return (
    <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((book) => (
          <tr key={book.isbn}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllBooks;
