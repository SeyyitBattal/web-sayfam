import React from "react";
import { useInput } from "./components/geceModuAc";
import WebSiteProvider from "./contexts/websiteContext";
import MyHeader from "./components/MyHeader";
import MyBody from "./components/MyBody";
import MyFooter from "./components/MyFooter";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  const [darkMode, setDarkMode, onClickHandler] = useInput("Mood", false);

  return (
    <div className={darkMode ? "dark App" : "App"}>
      <div className="bg-white dark:bg-slate-900 text-black dark:text-gray-300 ">
        <WebSiteProvider>
          <div className="allPage">
            <header>
              <MyHeader darkMode={darkMode} setDarkMode={onClickHandler} />
            </header>
            <MyBody />
            <Projects />
          </div>
          <MyFooter />
        </WebSiteProvider>
      </div>
    </div>
  );
}

export default App;
