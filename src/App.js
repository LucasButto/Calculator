import "./App.css";
import ButtonsDisplay from "./components/ButtonsDisplay";
import Panel from "./components/Panel";

function App() {
  return (
    <div className="container">
      <div className="calculator">
        <div className="panel">
          <Panel />
        </div>
        <div className="buttons-display">
          <ButtonsDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
