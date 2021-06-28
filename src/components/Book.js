import Button from "./Button";

const Book = (props) => {
  const deleteBookHandler = () => {
    const onConfirm = window.confirm("Are you sure!");
    onConfirm && props.onDelete(props.book.isbn);
  };

  return (
    <tr key={props.book.isbn}>
      <td>{props.book.title}</td>
      <td>{props.book.author}</td>
      <td>{props.book.isbn}</td>
      <td>
        <Button className="btn btn-sm btn-danger" onClick={deleteBookHandler}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Book;
