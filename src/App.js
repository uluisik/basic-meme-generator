import "./App.css";
import Header from "./components/header/Header";
import MemeGenerator from "./components/memeGenerator/MemeGenerator";

function App() {
  return (
    <div className="App">
      <Header name="Meme Generator" />
      <MemeGenerator />
    </div>
  );
}

export default App;
