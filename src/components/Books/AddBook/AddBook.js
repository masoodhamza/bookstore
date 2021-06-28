import Button from "../../UI/Button/Button";
import "./AddBook.css";

const AddBook = () => {
  return (
    <form action="" className="form-control">
      <div>
        <label>Title</label>
        <input type="text" />
      </div>
      <div>
        <label>Author</label>
        <input type="text" />
      </div>
      <div>
        <label>ISBN</label>
        <input type="number" />
      </div>
      <Button type="submit" className="button">
        Add Book
      </Button>
    </form>
  );
};

export default AddBook;
