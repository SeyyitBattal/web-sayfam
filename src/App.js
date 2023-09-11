import React from "react";
import MyHeader from "./components/MyHeader";
import MyBody from "./components/MyBody";
import MyFooter from "./components/MyFooter";
import { useInput } from "./components/geceModuAc";
import "./App.css";

function App() {
  const [darkMode, setDarkMode, onClickHandler] = useInput("Mood", false);

  return (
    <div className={darkMode ? "dark App" : "App"}>
      <div className="bg-white dark:bg-slate-800 text-black dark:text-gray-400">
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
    </div>
  );
}

export default App;
