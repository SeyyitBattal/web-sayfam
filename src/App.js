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
      <div className="bg-white dark:bg-slate-900 text-black dark:text-gray-300 ">
        <div className="allPage">
          <header>
            <MyHeader darkMode={darkMode} setDarkMode={onClickHandler} />
          </header>
          <MyBody />
        </div>
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
