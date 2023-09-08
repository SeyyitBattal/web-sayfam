import MyHeader from "./components/MyHeader";
import MyBody from "./components/MyBody";
import MyFooter from "./components/MyFooter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <MyHeader />
      </header>
      <div>
        <MyBody />
      </div>
      <div>
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
