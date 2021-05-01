import "./App.css";
import Logo from "./components/Logo/Logo";
import Routers from "./components/Routers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Routers />
      </header>
    </div>
  );
}

export default App;
