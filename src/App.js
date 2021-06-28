import "./App.css";
import AddBook from "./components/Books/AddBook/AddBook";

const App = () => {
  return (
    <div className="app">
      <h1>Book List App</h1>
      <div className="app-card">
        <AddBook />
      </div>
    </div>
  );
};

export default App;
