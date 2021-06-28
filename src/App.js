import "./App.css";
import AddBook from "./components/AddBook";

const App = () => {
  return (
    <div className="container-fluid app">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center mt-5">Book List App</h1>
          <div className="card text-dark">
            <AddBook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
