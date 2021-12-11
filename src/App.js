import logo from "./logo.svg";
import "./App.css";
import Cards from "./Cards";

function App() {
  return (
    <div className="App">
      <header
        style={{ backgroundColor: "MidnightBlue" }}
        className="App-header"
      >
        <img src={logo} className="App-logo" alt="logo" />
        <Cards />
        <Cards />
      </header>
    </div>
  );
}

export default App;
