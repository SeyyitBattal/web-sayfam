import React from "react";
import { headerData } from "../data/HeaderData";

const MyHeader = (props) => {
  const toggleMode = (e) => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };

  const render = headerData.map((item) => {
    return (
      <div className="headerDiv ">
        <div className="toggle_language">
          <label className="relative inline-flex items-center mr-5 cursor-pointer">
            <div className={props.darkMode ? "toogle toggled" : "toggle"}>
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={toggleMode}
              />
            </div>
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>

            <span className="ml-3 text-sm font-medium text-brown-900 dark:text-brown-300">
              DARK MODE |
            </span>
          </label>

          <span className="ml-3 text-sm font-medium text-brown-900 dark:text-brown-300">
            TÜRKÇE'YE GEÇ
          </span>
        </div>

        <div className="topButtons">
          <button className="bg-transparent border-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-10 border border-blue-800 hover:border-transparent rounded">
            Skills
          </button>
          <button className="bg-transparent border-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-10 border border-blue-800 hover:border-transparent rounded mx-2">
            Projects
          </button>
          <button className="bg-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-10 border border-blue-800 hover:border-transparent rounded">
            Hire me
          </button>
        </div>

        <div className="intro mt-20">
          <h3 className=" lg:text-base sm:pb-3 text-indigo-700">
            ————— {item.isim}
          </h3>
          <div className="flex content-center lg:flex-row lg:items-end ">
            <div className=" pr-5  flex-1">
              <h2 className=" mb-9 text-6xl font-bold ">{item.slogan}</h2>
              <p className="text-gray-600 mb-9 text-2xl pr-3 bg-white dark:bg-black">
                {item.aciklama}
              </p>
              <div className="flex lg:mt-3 gap-2 max-sm:my-5  max-sm:w-9/12 sm:mt-3 max-lg:mb-3">
                <button className="bg-blue-800 hover:bg-white text-white font-semibold hover:text-blue-800 py-2 px-10 border border-blue-800  rounded">
                  Hire me
                </button>
                <a href="https://github.com/SeyyitBattal">
                  <img src={item.github} alt="Seyyit Battal Arvas" />
                </a>
                <a href="https://www.linkedin.com/in/seyyit-battal-arvas-aaa86b110/">
                  <img src={item.linkedin} alt="Seyyit Battal Arvas" />
                </a>
              </div>
            </div>
            <div>
              <img
                className="  lg:w-[360px] lg:h-[360px] rounded-lg shadow-2xl"
                src={item.myPhoto}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div className=" max-sm:w-full m-auto">{render}</div>;
};

export default MyHeader;
