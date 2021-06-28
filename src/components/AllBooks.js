import Book from "./Book";

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
          <Book book={book} onDelete={props.deleteBook} />
        ))}
      </tbody>
    </table>
  );
};

export default AllBooks;
