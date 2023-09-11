import React from "react";
import MyHeader from "./components/MyHeader";
import MyBody from "./components/MyBody";
import MyFooter from "./components/MyFooter";
import { useInput } from "./components/geceModuAc";
import "./App.css";

function App() {
  const [darkMode, setDarkMode, onClickHandler] = useInput("Mood", false);

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <header>
        <MyHeader darkMode={darkMode} setDarkMode={onClickHandler} />
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
